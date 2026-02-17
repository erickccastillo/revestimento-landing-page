import { useScrollReveal } from "@/hooks/useScrollReveal";
import productFloors from "@/assets/product-floors.jpg";
import productAzulejos from "@/assets/product-azulejos.jpg";
import productPorcelanato from "@/assets/product-porcelanato.jpg";
import productBano from "@/assets/product-bano.jpg";

const products = [
  { img: productFloors, title: "Pisos", desc: "Acabados en madera, mármol y piedra natural" },
  { img: productAzulejos, title: "Azulejos", desc: "Diseños decorativos para muros y paredes" },
  { img: productPorcelanato, title: "Porcelanatos", desc: "Gran formato con acabado pulido y mate" },
  { img: productBano, title: "Muebles de Baño", desc: "Estilo y funcionalidad para tu baño" },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm text-center mb-3">Catálogo</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 font-montserrat">
            Nuestros Productos
          </h2>
        </div>

        <div className={`stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? "visible" : ""}`}>
          {products.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-1">{p.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
