import { useState } from "react";
import { Language, translations } from "../types";
import { Camera, Eye, Heart, Users2, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ResultsProps {
  currentLang: Language;
}

interface GalleryItem {
  id: string;
  category: "couple" | "friends" | "adventure";
  image: string;
  title: string;
  location: string;
}

export default function Results({ currentLang }: ResultsProps) {
  const t = translations[currentLang];
  const [activeFilter, setActiveFilter] = useState<"all" | "couple" | "friends" | "adventure">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "g1",
      category: "couple",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
      title: currentLang === "UZB" ? "Sokin sahroda romantik kecha" : currentLang === "RUS" ? "Романтика на лоне природы" : "Romantic wilderness escape",
      location: "Zomin tog'lari"
    },
    {
      id: "g2",
      category: "friends",
      image: "/src/assets/images/wild_nest_bonfire_1780229693080.png",
      title: currentLang === "UZB" ? "O'tin hidi ostida shinam suhbat" : currentLang === "RUS" ? "Разговоры у костра" : "Bonfire circle with friends",
      location: "Chorvoq suv ombori"
    },
    {
      id: "g3",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=800&q=80",
      title: currentLang === "UZB" ? "Tog' cho'qqisida yulduzlar ostida" : currentLang === "RUS" ? "Под звездами гор" : "Under the high peak stars",
      location: "Ugom-Chotqol tog'lari"
    },
    {
      id: "g4",
      category: "friends",
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      title: currentLang === "UZB" ? "Tabiat qo'ynidagi ochiq osmon kinoteatri" : currentLang === "RUS" ? "Кинотеатр на природе" : "Nature open air movie night",
      location: "Zomin tog'lari"
    },
    {
      id: "g5",
      category: "couple",
      image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?auto=format&fit=crop&w=800&q=80",
      title: currentLang === "UZB" ? "Ko'l bo'yida birinchi tonggi quyosh" : currentLang === "RUS" ? "Новый рассвет у озера" : "First golden sunrise by lake",
      location: "Tuzkon ko'li bo'yi"
    },
    {
      id: "g6",
      category: "adventure",
      image: "/src/assets/images/wild_nest_hero_1780229669137.png",
      title: currentLang === "UZB" ? "To'liq jihozlangan safari glampingi" : currentLang === "RUS" ? "Полный эстетичный глэмпинг" : "Fully rigged safari glamping",
      location: "Chimyon yonbag'irlari"
    }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="results" className="py-24 bg-white dark:bg-forest/10 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-warm-gold border-b-2 border-warm-gold/30 pb-1.5 inline-block mb-3">
            {t.results.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest dark:text-warm-cream tracking-tight mt-3">
            {t.results.title}
          </h2>
          <p className="text-sm sm:text-base text-forest/70 dark:text-warm-cream/70 mt-3 font-sans">
            {t.results.subtitle}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: t.results.filterAll, icon: Camera },
            { id: "couple", label: t.results.filterCouple, icon: Heart },
            { id: "friends", label: t.results.filterFriends, icon: Users2 },
            { id: "adventure", label: t.results.filterAdventure, icon: Compass },
          ].map((filt) => (
            <button
              key={filt.id}
              onClick={() => setActiveFilter(filt.id as any)}
              className={`flex items-center gap-2 py-2 px-5 text-xs font-bold tracking-wider rounded-xl uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === filt.id
                  ? "bg-forest text-warm-cream dark:bg-warm-gold dark:text-forest shadow-md"
                  : "bg-warm-cream/40 dark:bg-forest/30 text-forest dark:text-warm-cream/80 hover:bg-warm-cream/80 dark:hover:bg-forest/55"
              }`}
            >
              <filt.icon className="h-3.5 w-3.5" />
              {filt.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Grid with hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                id={`gallery-item-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-warm-cream/30 dark:border-leaf/10 bg-white dark:bg-forest cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                {/* Image */}
                <div className="overflow-hidden aspect-video relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/25 rounded-full backdrop-blur-sm text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* Info Overlay Panel */}
                <div className="p-5 text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-warm-gold">
                    {item.location}
                  </span>
                  <h3 className="text-sm font-bold text-forest dark:text-warm-cream mt-1 line-clamp-1 font-serif">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Large Image modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
              {/* Click outside to close */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-4xl w-full max-h-[85vh] relative rounded-3xl overflow-hidden border border-warm-cream/20 bg-forest/20"
              >
                <img
                  src={selectedImage}
                  alt="High quality memory"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
