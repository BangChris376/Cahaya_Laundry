import { motion } from "framer-motion";
import { Shirt, Wind, SprayCan } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Cuci Setrika",
    description: "Pakaian dicuci bersih lalu disetrika rapi siap pakai",
    highlight: "Layanan Terlaris",
  },
  {
    icon: Wind,
    title: "Cuci Kering",
    description: "Pakaian dicuci dan dikeringkan tanpa setrika",
    highlight: "Hemat Budget",
  },
  {
    icon: SprayCan,
    title: "Setrika Saja",
    description: "Khusus setrika untuk pakaian yang sudah bersih",
    highlight: "Cepat Selesai",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilihan Layanan Laundry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan laundry kiloan dengan kualitas
            terbaik dan harga terjangkau
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-float transition-all border border-border/50"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional services note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-6 py-3 rounded-full">
            <span className="text-2xl">🛏️</span>
            <span className="font-medium">
              Terima juga: Bedcover, Karpet, Selimut, dll (Harga bervariasi)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
