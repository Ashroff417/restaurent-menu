import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-warm-brown">
      {/* Ambient radial glows */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,hsl(16_65%_45%/0.5),transparent),radial-gradient(ellipse_40%_60%_at_20%_80%,hsl(82_30%_35%/0.3),transparent),radial-gradient(ellipse_50%_40%_at_80%_20%,hsl(38_35%_50%/0.3),transparent)]" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(25_30%_10%/0.4))]" />

      <div className="relative z-10 text-center px-6">
        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <svg className="w-8 h-8 text-terracotta/60" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2C14 6 10 8 6 8c2 4 2 8 0 12 4 0 8 2 10 6 2-4 6-6 10-6-2-4-2-8 0-12-4 0-8-2-10-6z" />
          </svg>
        </motion.div>

        {/* Laurel wreath logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative inline-block"
        >
          {/* Left laurel */}
          <svg
            className="absolute -left-16 md:-left-24 top-1/2 -translate-y-1/2 w-14 md:w-20 h-auto text-olive/50"
            viewBox="0 0 60 120"
            fill="currentColor"
          >
            <path d="M50 10c-8 4-14 12-16 22 2-2 6-3 10-2-6 6-10 14-10 22 4-2 8-2 12 0-4 8-4 16 0 24-4-2-8-2-12 0 0 8 4 16 10 22-4 1-8 0-10-2 2 10 8 18 16 22" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="38" cy="20" rx="6" ry="10" transform="rotate(-30 38 20)" opacity="0.6" />
            <ellipse cx="30" cy="38" rx="6" ry="10" transform="rotate(-15 30 38)" opacity="0.5" />
            <ellipse cx="28" cy="58" rx="6" ry="10" opacity="0.4" />
            <ellipse cx="30" cy="78" rx="6" ry="10" transform="rotate(15 30 78)" opacity="0.5" />
            <ellipse cx="38" cy="96" rx="6" ry="10" transform="rotate(30 38 96)" opacity="0.6" />
          </svg>

          {/* Right laurel (mirrored) */}
          <svg
            className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 w-14 md:w-20 h-auto text-olive/50 -scale-x-100"
            viewBox="0 0 60 120"
            fill="currentColor"
          >
            <path d="M50 10c-8 4-14 12-16 22 2-2 6-3 10-2-6 6-10 14-10 22 4-2 8-2 12 0-4 8-4 16 0 24-4-2-8-2-12 0 0 8 4 16 10 22-4 1-8 0-10-2 2 10 8 18 16 22" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="38" cy="20" rx="6" ry="10" transform="rotate(-30 38 20)" opacity="0.6" />
            <ellipse cx="30" cy="38" rx="6" ry="10" transform="rotate(-15 30 38)" opacity="0.5" />
            <ellipse cx="28" cy="58" rx="6" ry="10" opacity="0.4" />
            <ellipse cx="30" cy="78" rx="6" ry="10" transform="rotate(15 30 78)" opacity="0.5" />
            <ellipse cx="38" cy="96" rx="6" ry="10" transform="rotate(30 38 96)" opacity="0.6" />
          </svg>

          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold text-cream leading-[0.9] tracking-tight">
            Water
            <br />
            Street
          </h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-3 my-4"
        >
          <span className="block w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-terracotta/60" />
          <svg className="w-4 h-4 text-terracotta" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0l2.5 5.5L16 6.5l-4 4 1 5.5L8 13l-5 3 1-5.5-4-4 5.5-1z" />
          </svg>
          <span className="block w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-terracotta/60" />
        </motion.div>

        {/* Haven */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl italic font-semibold text-terracotta tracking-wide"
        >
          Haven
        </motion.p>

        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-6"
        >
          <span className="inline-block px-6 py-2 border border-cream/20 rounded-full text-cream/50 text-xs tracking-[0.35em] uppercase font-body">
            Mediterranean Kitchen · New Paltz, NY
          </span>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 text-lg md:text-xl text-cream/60 font-body font-light max-w-md mx-auto tracking-wide italic"
        >
          "Where Mediterranean Flavors Meet Home"
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToMenu}
          className="mt-10 px-10 py-4 bg-terracotta text-cream font-body text-sm tracking-[0.25em] uppercase hover:bg-terracotta/90 transition-colors duration-300 rounded-sm shadow-lg shadow-terracotta/20"
        >
          Explore Our Menu
        </motion.button>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16"
        >
          <ChevronDown
            className="w-6 h-6 text-cream/30 mx-auto cursor-pointer animate-bounce hover:text-cream/60 transition-colors"
            onClick={scrollToMenu}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
