import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const prices = [
  {
    name: "Cuci Setrika",
    price: "6.700",
    unit: "/kg",
    description: "Cuci bersih + setrika rapi",
    features: ["Dicuci bersih", "Pewangi premium", "Disetrika rapi", "Dilipat rapi"],
    popular: true,
  },
  {
    name: "Setrika Saja",
    price: "5.800",
    unit: "/kg",
    description: "Khusus setrika pakaian",
    features: ["Setrika profesional", "Hasil rapi", "Dilipat rapi", "Cepat selesai"],
    popular: false,
  },
  {
    name: "Cuci Kering",
    price: "5.600",
    unit: "/kg",
    description: "Cuci + keringkan tanpa setrika",
    features: ["Dicuci bersih", "Pewangi premium", "Dikeringkan", "Dilipat praktis"],
    popular: false,
  },
];

const PriceSection = () => {
  return (
    <section id="harga" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            💰 Harga Terjangkau
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Daftar Harga Per Kilogram
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Harga bersahabat dengan kualitas terjamin. Minimal order 2 kg.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prices.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-card rounded-3xl p-8 shadow-card hover:shadow-float transition-all border-2 ${
                item.popular
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-gradient-hero text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-soft">
                    <Star className="w-4 h-4 fill-current" />
                    Terlaris
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">Rp</span>
                  <span className="text-4xl font-bold text-gradient-primary">
                    {item.price}
                  </span>
                  <span className="text-muted-foreground">{item.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/6281399108632?text=Halo%20Cahaya%20Laundry%20PP%20%F0%9F%91%8B%0A%0ASaya%20ingin%20memesan%20layanan%20laundry%3A%0A%0A*Nama%3A*%20%0A*Tipe%20Pesanan%3A*%20${encodeURIComponent(item.name)}%0A*Estimasi%20Berat%3A*%20...%20kg%0A*Layanan%3A*%20(Antar%20Jemput%2FDatang%20ke%20Outlet)%0A*Alamat%3A*%20%0A%0ATerima%20kasih%20%F0%9F%99%8F`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                  item.popular
                    ? "bg-gradient-cta text-primary-foreground shadow-soft"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Pesan Sekarang
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Extra items note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
            <h4 className="font-bold text-foreground mb-4 text-center">
              🛏️ Item Khusus (Harga Bervariasi)
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["Bedcover", "Karpet", "Selimut", "Gordyn", "Jas", "Boneka"].map(
                (item) => (
                  <span
                    key={item}
                    className="bg-muted px-4 py-2 rounded-full text-sm text-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              Hubungi kami via WhatsApp untuk info harga item khusus
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceSection;
