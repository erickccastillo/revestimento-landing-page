import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80 text-sm">
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-3">
              PISOS Y AZULEJOS <span className="text-gold">REVESTIMENTO</span>
            </h4>
            <p>Creamos espacios únicos para tu hogar o empresa con los mejores materiales y diseños.</p>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold mb-3">Enlaces</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block hover:text-gold transition-colors">Inicio</a>
              <a href="#nosotros" className="block hover:text-gold transition-colors">Nosotros</a>
              <a href="#productos" className="block hover:text-gold transition-colors">Productos</a>
              <a href="#contacto" className="block hover:text-gold transition-colors">Contacto</a>
            </div>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold mb-3">Contacto</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 33 1587 6043</p>
              <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />El Triángulo, 45138 Nuevo México, Jal.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-primary-foreground/40 text-xs">
          © 2026 Pisos y Azulejos Revestimento. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
