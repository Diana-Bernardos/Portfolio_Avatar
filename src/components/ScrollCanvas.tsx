import { useEffect, useRef, useState } from 'react';

interface ScrollCanvasProps {
  images: string[];
}

export function ScrollCanvas({ images }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

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
          setIsReady(true);
        }
      };
    });
  }, [images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || loadedImages.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = loadedImages[0];
    if (!img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, [loadedImages]);

  return (
    <div className="relative h-full w-full">
      {!isReady && (
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-full border border-borderC/60 bg-[rgba(var(--color-surface),0.45)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_30%,rgba(0,209,255,0.14)_50%,rgba(112,0,255,0.14)_63%,transparent_85%)] bg-[length:220%_220%]" />
        <div className="absolute inset-x-[18%] top-[22%] h-8 rounded-full bg-white/6 blur-2xl" />
        <div className="absolute inset-x-[24%] bottom-[20%] h-24 rounded-full bg-accent/10 blur-3xl" />
      </div>
      )}

      <canvas
        ref={canvasRef}
        width={1000}
        height={1000}
        className="pointer-events-none h-full w-full object-contain"
      />
    </div>
  );
}
