import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

interface ScrollCanvasProps {
  images: string[];
  containerRef: React.RefObject<HTMLDivElement>;
}

export function ScrollCanvas({ images, containerRef }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0..1) to frame index (0..images.length - 1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, images.length - 1]);

  useEffect(() => {
    const loaded: HTMLImageElement[] = [];
    let loadedCount = 0;

    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded[index] = img;
        loadedCount++;
        if (loadedCount === images.length) {
          setLoadedImages(loaded);
        }
      };
    });
  }, [images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || loadedImages.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const unsubscribe = frameIndex.on('change', (latest) => {
      const index = Math.round(latest);
      const img = loadedImages[index];
      if (img && ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw image (maintaining aspect ratio or fitting)
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    });

    return () => unsubscribe();
  }, [loadedImages, frameIndex]);

  // Initial draw
  useEffect(() => {
    if (loadedImages.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = loadedImages[0];
      if (img && ctx) {
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    }
  }, [loadedImages]);

  return (
    <canvas
      ref={canvasRef}
      width={1000}
      height={1000}
      className="w-full h-full object-contain pointer-events-none"
    />
  );
}
