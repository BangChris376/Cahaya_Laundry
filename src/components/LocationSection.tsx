import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Truck } from "lucide-react";

const LocationSection = () => {
  const infoItems = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Bukit Limau Blok PI/4-5 RT 7 RW XI, Permata Puri Ngaliyan",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Setiap Hari: 08.30 - 21.00 WIB",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "0813 9910 8632",
      isLink: true,
    },
    {
      icon: Truck,
      title: "Area Layanan",
      content: "Antar Jemput GRATIS untuk area Ngaliyan",
    },
  ];

  return (
    <section id="lokasi" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-hero" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            📍 Lokasi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Temukan Kami di Ngaliyan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lokasi strategis dengan layanan antar jemput gratis untuk memudahkan
            kebutuhan laundry Anda
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-background rounded-2xl p-6 shadow-soft border border-border/50"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                {item.isLink ? (
                  <a
                    href="https://wa.me/6281399108632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map placeholder / Area coverage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-hero rounded-3xl p-8 text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border-4 border-current rounded-full" />
                <div className="absolute bottom-4 left-4 w-24 h-24 border-4 border-current rounded-full" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                    <Truck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Antar Jemput GRATIS</h3>
                    <p className="opacity-90">Area Ngaliyan & Sekitarnya</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="opacity-90">
                    ✓ Permata Puri Ngaliyan
                  </p>
                  <p className="opacity-90">
                    ✓ Perumahan sekitar Ngaliyan
                  </p>
                  <p className="opacity-90">
                    ✓ Universitas sekitar Ngaliyan
                  </p>
                  <p className="opacity-90">
                    ✓ Kawasan Ngaliyan lainnya
                  </p>
                </div>

                <motion.a
                  href="https://wa.me/6281399108632?text=Halo%20Cahaya%20Laundry,%20apakah%20alamat%20saya%20masuk%20area%20layanan?"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold"
                >
                  <MapPin className="w-5 h-5" />
                  Cek Area Layanan
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
