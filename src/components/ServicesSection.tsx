import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench, Truck, ShieldCheck, Palette } from "lucide-react";

const services = [
  { icon: Wrench, title: "Servicio de Instalación", desc: "Instalación profesional con garantía de calidad." },
  { icon: Truck, title: "Entrega el Mismo Día", desc: "Recibe tu pedido rápidamente en la zona metropolitana." },
  { icon: ShieldCheck, title: "Garantía Total", desc: "Respaldamos la calidad de todos nuestros productos." },
  { icon: Palette, title: "Asesoría de Diseño", desc: "Te ayudamos a elegir la combinación perfecta." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm text-center mb-3">Servicios</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 font-montserrat">
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className={`stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? "visible" : ""}`}>
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <s.icon className="w-9 h-9 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://wa.me/523316007579"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-gold text-accent-foreground px-8 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Cotiza ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
