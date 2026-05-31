import { Tent, Film, Sparkles, Volume2, Coffee, FlameKindling, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { Language, translations } from "../types";
import { motion } from "motion/react";

// Import the custom high-quality generated lakeside glamping hero image matching the user's upload
import heroGlampingImage from "../assets/images/wild_nest_lake_glamping_hero_1780241489255.png";

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export default function Hero({ currentLang, onOpenBooking }: HeroProps) {
  const t = translations[currentLang];

  // Inclusions item icons map
  const inclusionIcons = [
    { title: t.hero.includedItems.tent, desc: t.hero.includedItems.tentDesc, icon: Tent },
    { title: t.hero.includedItems.mattress, desc: t.hero.includedItems.mattressDesc, icon: ShieldCheck },
    { title: t.hero.includedItems.projector, desc: t.hero.includedItems.projectorDesc, icon: Film },
    { title: t.hero.includedItems.speaker, desc: t.hero.includedItems.speakerDesc, icon: Volume2 },
    { title: t.hero.includedItems.coffee, desc: t.hero.includedItems.coffeeDesc, icon: Coffee },
    { title: t.hero.includedItems.candles, desc: t.hero.includedItems.candlesDesc, icon: FlameKindling },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-20 bg-warm-cream/30 dark:bg-earth-dark/40 transition-colors duration-300">
      {/* Background Ambience Bulbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-gold/10 dark:bg-warm-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-forest/5 dark:bg-leaf/5 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold leading-none bg-forest/10 dark:bg-warm-gold/10 text-forest dark:text-warm-gold tracking-wider max-w-max">
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.tagline}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-forest dark:text-warm-cream tracking-tight leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-leaf/80 dark:text-warm-cream/80 italic">
              {t.hero.subtitle}
            </p>

            {/* High-Contrast Hero Action Panel (CTA) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-2 items-stretch sm:items-center">
              <button
                id="hero-primary-book-btn"
                onClick={onOpenBooking}
                className="px-10 py-5 bg-gradient-to-r from-warm-gold to-amber-500 hover:from-amber-500 hover:to-warm-gold text-forest font-black uppercase text-xs sm:text-sm tracking-widest rounded-2xl transition duration-300 transform hover:scale-[1.03] shadow-[0_10px_25px_-5px_rgba(210,157,82,0.4)] flex items-center justify-center gap-3.5 cursor-pointer border border-warm-gold/30 hover:border-warm-gold animate-pulse-gentle"
              >
                <Tent className="h-5 w-5 fill-forest/10" />
                <span>{currentLang === "UZB" ? "SAYOHATNI BAND QILISH" : currentLang === "RUS" ? "ЗАБРОНИРОВАТЬ ОТДЫХ" : "SECURE YOUR RETREAT"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="tel:+998903893389"
                className="px-6 py-4.5 bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 border border-forest/15 dark:border-warm-cream/15 text-forest dark:text-warm-cream font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2.5 transition duration-300 shadow-sm"
              >
                <Phone className="h-4 w-4 text-warm-gold" />
                <span>+998 90 389 33 89</span>
              </a>
            </div>

            {/* Trust reassurance markers */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-[10px] font-extrabold uppercase tracking-widest text-forest/60 dark:text-warm-cream/50">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-500">✓ {currentLang === "UZB" ? "Bepul O'rnatish" : currentLang === "RUS" ? "Бесплатная установка" : "Free Setup"}</span>
              <span className="text-warm-gold/50">•</span>
              <span className="flex items-center gap-1">✓ {currentLang === "UZB" ? "To'liq Tozalanadi" : currentLang === "RUS" ? "Стерильное чистое" : "Sanitized"}</span>
              <span className="text-warm-gold/50">•</span>
              <span className="flex items-center gap-1 text-amber-600 dark:text-warm-gold">✓ {currentLang === "UZB" ? "Hamma narsa Tayyor" : currentLang === "RUS" ? "Все включено" : "All Included"}</span>
            </div>

            {/* Massive Spotlight Banner - 10% Family Discount */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-warm-gold/20 via-warm-gold/5 to-transparent border-2 border-warm-gold/60 dark:border-warm-gold/40 shadow-lg relative overflow-hidden backdrop-blur-sm mt-2">
              <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-10 pointer-events-none">
                <Sparkles className="w-36 h-36 text-warm-gold" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Large stylized percentage pill */}
                <div className="flex-shrink-0 bg-warm-gold text-forest rounded-2xl px-5 py-4 text-center shadow-xl flex flex-col justify-center items-center font-serif leading-none">
                  <span className="text-3xl font-black tracking-tight">-10%</span>
                  <span className="text-[8px] uppercase tracking-widest font-black mt-1">SUPER</span>
                </div>
                
                <div className="space-y-1.5 flex-1">
                  <span className="inline-block bg-warm-gold/20 text-warm-gold dark:text-warm-cream px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                    {currentLang === "UZB" ? "Oilaviy Taklif" : currentLang === "RUS" ? "Семейное Предложение" : "Family Special"}
                  </span>
                  <h3 className="text-base md:text-lg font-black text-forest dark:text-warm-cream leading-tight">
                    {t.hero.familyDiscountTag}
                  </h3>
                  <p className="text-xs text-forest/80 dark:text-warm-cream/80 leading-relaxed font-sans mt-1">
                    {currentLang === "UZB" 
                      ? "Farzandlar yoki yaqin oila a'zolari bilan sayohat qiling va istalgan premium kemping tariflarimizni o'rnatib berish xizmati bilan birga avtomatik 10% chegirmada oling!" 
                      : currentLang === "RUS" 
                        ? "Путешествуйте с детьми или семьей и автоматически получайте скидку 10% на все премиальные глэмпинг-комплекты вместе с заботливым монтажом под ключ!"
                        : "Escape to the wild with your family or kids, and enjoy 10% discount on all premium glamping setups with complete on-site priority installation!"}
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusions Intro text */}
            <div className="pt-2 flex items-center gap-2">
              <span className="h-px bg-forest/20 dark:bg-warm-cream/20 flex-1"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-forest/60 dark:text-warm-cream/60">
                {t.hero.includedCountLabel}
              </span>
              <span className="h-px bg-forest/20 dark:bg-warm-cream/20 flex-1"></span>
            </div>
          </div>

          {/* Hero Right Visual Banner with image overlay */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-forest dark:border-leaf group">
              <img
                src={heroGlampingImage}
                alt="Wild Nest Glamping Setup"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] object-cover transition duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent"></div>
              
              {/* Image Overlaid details */}
              <div className="absolute bottom-6 left-6 right-6 text-warm-cream">
                <span className="text-xs text-warm-gold uppercase tracking-widest font-extrabold block mb-1">
                  Glamping & Cinema
                </span>
                <p className="text-lg font-serif italic">
                  &ldquo;Tabiatning o&apos;rtasidagi shinam makonimizga xush kelibsiz!&rdquo;
                </p>
              </div>
            </div>

            {/* Little floating elements to capture attention */}
            <div className="absolute -top-4 -right-4 bg-warm-gold text-forest rounded-2xl p-4 shadow-xl border-2 border-forest transform rotate-3 hidden sm:block">
              <p className="text-sm font-black tracking-tight leading-none uppercase">Full Complex</p>
              <p className="text-[10px] uppercase tracking-wide font-extrabold text-forest/80">Delivered & Set up</p>
            </div>
          </div>
        </div>

        {/* Detailed Inclusions list */}
        <div id="inclusions" className="mt-20 pt-16 border-t border-forest/10 dark:border-warm-cream/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest dark:text-warm-cream">
              {t.hero.includedTitle}
            </h2>
            <div className="h-1 w-20 bg-warm-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {inclusionIcons.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl bg-white dark:bg-forest/50 border border-warm-cream/50 dark:border-leaf/20 shadow-md flex flex-col items-center text-center transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/5 dark:bg-warm-gold/5 text-forest dark:text-warm-gold flex items-center justify-center mb-4 border border-forest/10 dark:border-warm-gold/10">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-forest dark:text-warm-cream mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-forest/70 dark:text-warm-cream/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
