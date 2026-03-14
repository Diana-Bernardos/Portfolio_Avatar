import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-borderC">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link to="/" className="text-lg font-bold text-primary tracking-tight">
            Diana Bernardos
          </Link>
          <p className="text-secondary text-sm font-medium opacity-70">
            © {new Date().getFullYear()} Frontend & UX.
          </p>
        </div>

        <div className="flex gap-8 text-secondary text-xs font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
          <Link to="/#projects" className="hover:text-primary transition-colors">Proyectos</Link>
          <Link to="/sobre-mi" className="hover:text-primary transition-colors">Sobre mi</Link>
          <a href="mailto:dianabernardosm@gmail.com" className="hover:text-primary transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

