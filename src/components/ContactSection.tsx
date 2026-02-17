import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(1, "El teléfono es requerido").max(20),
  message: z.string().trim().min(1, "El mensaje es requerido").max(1000),
});

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm text-center mb-3">Contacto</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 font-montserrat">
            Ubicación y Contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div className={`scroll-reveal slide-left ${isVisible ? "visible" : ""}`}>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Dirección</h4>
                  <p className="text-muted-foreground text-sm">Av. Base Aerea 1273a, El Triángulo, 45138 Nuevo México, Jal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Teléfono</h4>
                  <p className="text-muted-foreground text-sm">33 1587 6043</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Horarios</h4>
                  <p className="text-muted-foreground text-sm">Lunes a viernes: 9 a.m.–7 p.m.</p>
                  <p className="text-muted-foreground text-sm">Sábado: 9 a.m.–3 p.m.</p>
                  <p className="text-muted-foreground text-sm">Domingo: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.2368613750474!2d-103.44347969422857!3d20.75082058695826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af00783ce331%3A0x9de982cbd7c0a811!2sPisos%20y%20azulejos%20Revestimento!5e0!3m2!1ses!2smx!4v1771286452073!5m2!1ses!2smx"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`scroll-reveal slide-right ${isVisible ? "visible" : ""}`}>
            {submitted ? (
              <div className="bg-card rounded-xl p-10 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center">
                  <Mail className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg space-y-5">
                <h3 className="text-xl font-bold text-foreground mb-2">Envíanos un mensaje</h3>
                {(["name", "email", "phone"] as const).map((field) => (
                  <div key={field}>
                    <input
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={field === "name" ? "Tu nombre" : field === "email" ? "Tu email" : "Tu teléfono"}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition ${errors[field] ? "border-destructive" : "border-border"}`}
                    />
                    {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full gradient-gold text-accent-foreground py-3 rounded-lg font-bold text-lg hover:scale-[1.02] transition-transform shadow-md"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
