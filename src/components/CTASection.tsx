import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""} text-center max-w-3xl mx-auto`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            ¿Listo para transformar tu hogar?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Contáctanos hoy mismo y recibe asesoría personalizada sin compromiso.
          </p>
          <a
            href="https://wa.me/523316007579"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-primary text-primary-foreground px-10 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Hablar con un especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
