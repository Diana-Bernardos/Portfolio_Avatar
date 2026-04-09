export function Footer() {
  return (
    <footer className="border-t border-borderC bg-background py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a href="#home" className="text-lg font-bold tracking-tight text-primary">
            Diana Bernardos
          </a>
          <p className="text-sm font-medium text-secondary/70">(c) {new Date().getFullYear()} Frontend & UX.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-secondary">
          <a href="#home" className="transition-colors hover:text-primary">
            Inicio
          </a>
          <a href="#about" className="transition-colors hover:text-primary">
            Sobre mi
          </a>
          <a href="#projects" className="transition-colors hover:text-primary">
            Proyectos
          </a>
          <a href="#contact" className="transition-colors hover:text-primary">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
