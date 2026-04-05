import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative py-24 px-4 bg-warm-brown text-cream overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,hsl(16_65%_45%/0.2),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-terracotta text-xs tracking-[0.4em] uppercase font-body block mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-5xl md:text-6xl mb-2">
            Call-In Orders
          </h2>
          <p className="text-cream/50 font-body text-sm tracking-widest uppercase">
            Skip the wait — order ahead
          </p>
        </motion.div>

        {/* Phone */}
        <motion.a
          href="tel:8454192374"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-4 mt-8 text-3xl md:text-4xl font-display text-terracotta hover:text-cream transition-colors duration-300 group"
        >
          <span className="w-14 h-14 rounded-full border-2 border-terracotta/40 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
            <Phone className="w-6 h-6" />
          </span>
          (845) 419-2374
        </motion.a>

        {/* Delivery partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <p className="text-cream/40 font-body text-xs tracking-[0.3em] uppercase mb-5">
            Also available on
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "DoorDash", color: "hover:border-red-400/60 hover:text-red-300" },
              { name: "Uber Eats", color: "hover:border-green-400/60 hover:text-green-300" },
            ].map((partner) => (
              <span
                key={partner.name}
                className={`px-7 py-3 border border-cream/15 rounded-full font-body text-sm tracking-wider text-cream/70 transition-all duration-300 cursor-default ${partner.color}`}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-14 flex items-center justify-center gap-3">
          <span className="block w-24 h-px bg-gradient-to-r from-transparent to-cream/15" />
          <span className="text-terracotta text-sm">❧</span>
          <span className="block w-24 h-px bg-gradient-to-l from-transparent to-cream/15" />
        </div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-start justify-center gap-3 text-cream/60 font-body"
        >
          <MapPin className="w-5 h-5 mt-0.5 text-terracotta flex-shrink-0" />
          <address className="not-italic leading-relaxed text-left">
            10 Main Street #201
            <br />
            New Paltz, NY 12561
          </address>
        </motion.div>

        {/* Footer */}
        <p className="mt-16 text-cream/20 text-xs font-body tracking-wider">
          © {new Date().getFullYear()} Water Street Haven. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
