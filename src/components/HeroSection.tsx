import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Interior moderno con pisos y azulejos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Floating mosaic decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-gold/30 rounded-lg animate-float opacity-30 hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-20 h-20 border-2 border-gold/20 rounded-sm animate-float opacity-20 hidden lg:block" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="animate-hero-text text-gold font-semibold tracking-widest uppercase text-sm mb-4">
          Pisos y Azulejos Revestimento
        </p>
        <h1 className="animate-hero-text-delay text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 font-montserrat">
          Creamos espacios únicos para tu hogar o empresa
        </h1>
        <p className="animate-hero-text-delay text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.7s" }}>
          Pisos, azulejos, porcelanatos y muebles de baño con diseños que marcan tendencia
        </p>
        <a
          href="#productos"
          className="animate-hero-btn inline-block gradient-gold text-accent-foreground px-8 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform shadow-lg"
        >
          Explora nuestros productos
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
