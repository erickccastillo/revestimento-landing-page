import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "María G.", text: "Excelente servicio y calidad en los productos. Transformaron mi cocina por completo. ¡Muy recomendados!", rating: 5 },
  { name: "Carlos R.", text: "La atención fue increíble, me asesoraron en todo el proceso. Los pisos quedaron espectaculares.", rating: 5 },
  { name: "Ana L.", text: "Entrega puntual y productos de primera. Mi baño quedó como de revista. Volveré a comprar sin duda.", rating: 5 },
  { name: "Roberto M.", text: "Precios competitivos y una variedad enorme. El equipo de instalación fue muy profesional.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm text-center mb-3">Testimonios</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-16 font-montserrat">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="bg-card rounded-xl p-10 text-center shadow-xl">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground text-lg italic mb-6">"{testimonials[current].text}"</p>
            <p className="font-bold text-foreground">{testimonials[current].name}</p>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-card rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-card rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-gold scale-125" : "bg-primary-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
