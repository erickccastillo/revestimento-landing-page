import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Lightbulb, Users, Gem } from "lucide-react";

const features = [
  { icon: Award, title: "Calidad Premium", desc: "Solo trabajamos con los mejores materiales y marcas reconocidas." },
  { icon: Lightbulb, title: "Diseño Innovador", desc: "Tendencias que transforman cualquier espacio en una obra de arte." },
  { icon: Users, title: "Asesoría Experta", desc: "Nuestro equipo te guía para elegir el producto perfecto." },
  { icon: Gem, title: "Variedad Exclusiva", desc: "Amplio catálogo de pisos, azulejos, porcelanatos y más." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="nosotros" className="py-24 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm text-center mb-3">Sobre Nosotros</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6 font-montserrat">
            Transformamos espacios con pasión
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-16">
            Somos una empresa dedicada a crear espacios únicos mediante la venta de pisos, azulejos, porcelanatos, decorados y muebles de baño. Contamos con diseños innovadores que marcan tendencia.
          </p>
        </div>

        <div className={`stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? "visible" : ""}`}>
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
