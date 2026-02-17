import { Phone, MapPin, Clock } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="text-xl font-bold tracking-tight text-primary font-montserrat">
            PISOS Y AZULEJOS <span className="text-gold">REVESTIMENTO</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">Nosotros</a>
            <a href="#productos" className="text-foreground hover:text-primary transition-colors">Productos</a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
          </div>
          <a
            href="https://wa.me/523316007579"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Cotiza ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
