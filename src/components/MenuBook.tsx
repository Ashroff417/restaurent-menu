import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuPage {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

const menuPages: MenuPage[] = [
  {
    title: "Main Platters",
    subtitle: "Served with rice & salad",
    items: [
      { name: "Original", description: "Chicken tenders over rice, served with salad", price: "$10.99" },
      { name: "Philly", description: "Philly steak over rice, peppers, onions, served with salad", price: "$11.99" },
      { name: "Super", description: "Grilled spicy chicken over rice, served with salad", price: "$12.99" },
      { name: "Shrimp", description: "Crispy shrimp over rice, served with salad", price: "$12.99" },
      { name: "Fire Fajita", description: "Chicken fajita over rice, peppers, onions, served with salad", price: "$11.99" },
      { name: "Cheesy", description: "Chopped meat over rice, peppers, onions, served with salad", price: "$11.99" },
    ],
  },
  {
    title: "Sandwiches & Wraps",
    subtitle: "Fresh baked pita & hand-rolled wraps",
    items: [
      { name: "Gyro Wrap", description: "Seasoned beef strips in Greek grilled pita with lettuce, tomatoes, red onions & tzatziki", price: "$10.99" },
      { name: "Falafel Sandwich", description: "Fresh homemade falafel in Egyptian pita with lettuce, tomatoes, red onion & tahini", price: "$9.99" },
      { name: "Chicken Souvlaki Wrap", description: "Marinated chicken cubes in Greek grilled pita with lettuce, tomatoes & tzatziki with feta", price: "$10.99" },
      { name: "Lentil Soup", price: "$4.99" },
    ],
  },
  {
    title: "Mediterranean Appetizers",
    subtitle: "Perfect for sharing",
    items: [
      { name: "Hummus", description: "Mashed chickpeas blended with tahini, lemon juice & garlic", price: "$8.99" },
      { name: "Baba Ghanoush", description: "Smoked grilled eggplant with tahini, lemon juice & olive oil", price: "$8.99" },
      { name: "Za'atar Fries", description: "French fries seasoned with za'atar", price: "$9.99" },
      { name: "Greek Fries", description: "Fries with homemade feta cheese & oregano", price: "$9.99" },
      { name: "Grape Leaves", description: "Stuffed with rice, tomatoes, onions, parsley & our secret recipe", price: "$10.99" },
      { name: "Tzatziki", description: "Creamy yogurt with cucumber, garlic & olive oil", price: "$7.99" },
      { name: "Greek Salad", description: "Lettuce, cherry tomatoes, cucumbers, bell peppers, red onions, olives, feta & Greek dressing", price: "$11.99" },
      { name: "Falafel Salad", description: "5 pieces falafel, cherry tomatoes, cucumbers, onions, lettuce & tahini", price: "$11.99" },
      { name: "Caesar Salad", description: "Grilled chicken, green salad with Caesar dressing & cheese", price: "$10.99" },
    ],
  },
  {
    title: "Sides, Desserts & Drinks",
    subtitle: "The finishing touches",
    items: [
      { name: "Pita", price: "$0.99" },
      { name: "Fries", price: "$5.99" },
      { name: "Baklava", description: "Layers of phyllo, nuts & honey syrup", price: "$5.99" },
      { name: "Kunafa", description: "Crispy pastry with sweet cheese & rose syrup", price: "$5.99" },
      { name: "Hibiscus Iced Tea", price: "$4.99" },
      { name: "Canned Soda", price: "$2.49" },
      { name: "Water", price: "$1.49" },
    ],
  },
];

const pageVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, rotateY: dir > 0 ? -8 : 8 }),
  center: { x: 0, opacity: 1, rotateY: 0 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, rotateY: dir > 0 ? 8 : -8 }),
};

const MenuBook = () => {
  const [[currentPage, direction], setPage] = useState([0, 0]);

  const paginate = (newDir: number) => {
    const next = currentPage + newDir;
    if (next >= 0 && next < menuPages.length) {
      setPage([next, newDir]);
    }
  };

  const page = menuPages[currentPage];

  return (
    <section id="menu" className="py-24 px-4 bg-gradient-to-b from-muted via-background to-muted">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <span className="text-terracotta text-xs tracking-[0.4em] uppercase font-body block mb-3">
          Discover
        </span>
        <h2 className="font-display text-5xl md:text-6xl text-foreground">
          Our Menu
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="block w-12 h-px bg-terracotta/40" />
          <span className="text-olive text-sm">❧</span>
          <span className="block w-12 h-px bg-terracotta/40" />
        </div>
      </motion.div>

      {/* Book container */}
      <div className="max-w-2xl mx-auto" style={{ perspective: 1200 }}>
        <div className="relative">
          {/* Stacked book pages effect */}
          <div className="absolute inset-0 parchment-bg rounded-lg translate-y-2 translate-x-1 opacity-40 page-shadow" />
          <div className="absolute inset-0 parchment-bg rounded-lg translate-y-1 translate-x-0.5 opacity-60 page-shadow" />

          {/* Main page */}
          <div className="relative overflow-hidden rounded-lg page-shadow">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="parchment-bg min-h-[520px] md:min-h-[560px] p-8 md:p-12 relative"
              >
                {/* Corner decorations */}
                <span className="absolute top-4 left-4 text-terracotta/20 text-2xl font-display">❦</span>
                <span className="absolute top-4 right-4 text-terracotta/20 text-2xl font-display rotate-180">❦</span>

                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-3xl md:text-4xl text-warm-brown italic">
                    {page.title}
                  </h3>
                  {page.subtitle && (
                    <p className="text-muted-foreground text-sm font-body mt-2 italic">
                      {page.subtitle}
                    </p>
                  )}
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="block w-12 h-px bg-terracotta/30" />
                    <span className="text-terracotta text-xs">✦</span>
                    <span className="block w-12 h-px bg-terracotta/30" />
                  </div>
                </div>

                {/* Menu items */}
                <div className="space-y-5">
                  {page.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-lg text-warm-brown font-semibold">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-parchment-dark/60 min-w-[20px]" />
                        {item.price && (
                          <span className="font-body text-terracotta font-bold whitespace-nowrap text-base">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-muted-foreground text-sm font-body mt-0.5 leading-relaxed pl-1">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Page indicator */}
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <span className="text-xs text-muted-foreground/60 font-body italic">
                    — {currentPage + 1} of {menuPages.length} —
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            disabled={currentPage === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-11 h-11 rounded-full bg-warm-brown text-cream flex items-center justify-center hover:bg-terracotta transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-lg"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === menuPages.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-11 h-11 rounded-full bg-warm-brown text-cream flex items-center justify-center hover:bg-terracotta transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-lg"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {menuPages.map((p, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > currentPage ? 1 : -1])}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? "bg-terracotta w-8"
                  : "bg-parchment-dark/60 w-2 hover:bg-terracotta/40"
              }`}
              aria-label={`Go to ${p.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuBook;
