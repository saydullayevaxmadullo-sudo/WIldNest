import { useState, useEffect } from "react";
import { Language, Theme, translations } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/Packages";
import Results from "./components/Results";
import Reviews from "./components/Reviews";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import { Phone, Send, Sparkles, MessageSquare, Compass, ArrowUpRight, Tent } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [lang, setLang] = useState<Language>("UZB");
  const [theme, setTheme] = useState<Theme>("dark"); // Immersive dark camping theme by default!
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string | undefined>(undefined);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  const t = translations[lang];

  // Apply document level theme class just in case some components read from html
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Scroll position detector for floating action button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleOpenBooking = (pkgName?: string) => {
    setSelectedPkg(pkgName);
    setBookingOpen(true);
  };

  return (
    <div className={`${theme} font-sans transition-colors duration-300 min-h-screen bg-warm-cream/10 dark:bg-earth-dark text-forest dark:text-warm-cream pb-0`}>
      
      {/* Navigation Header */}
      <Navbar
        currentLang={lang}
        setLang={setLang}
        currentTheme={theme}
        toggleTheme={toggleTheme}
        onOpenBooking={(pkg) => handleOpenBooking(pkg)}
      />

      {/* Hero Section */}
      <Hero
        currentLang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* About Section */}
      <About currentLang={lang} />

      {/* Giant CTA Intermediary Banner - Enhances conversions drastically */}
      <section className="py-16 bg-gradient-to-r from-forest to-leaf text-warm-cream relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-warm-gold/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 left-10 w-60 h-60 bg-white/5 rounded-full blur-xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <span className="px-3 py-1 bg-warm-gold/20 text-warm-gold rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 mb-4">
            <Sparkles className="h-3 w-3 fill-warm-gold" />
            Eksklyuziv taklif
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-semibold tracking-tight leading-snug max-w-2xl">
            {lang === "UZB" 
              ? "Faqa sumkangizni oling – qolgan barcha narsani o'zimiz tayyorlaymiz!" 
              : lang === "RUS" 
                ? "Просто соберите свой рюкзак, а всё остальное организует Wild Nest!" 
                : "Just pack your bag — Wild Nest prepares every single element for you!"}
          </h2>
          <p className="text-sm text-warm-cream/80 mt-4 max-w-md leading-relaxed font-sans">
            {lang === "UZB" 
              ? "Chaqnash shamlar ostidagi kinoteatr, yoqimli musiqa va tonggi dush, xushbo'y kofe — hamma narsa tayyor." 
              : lang === "RUS" 
                ? "Проектор со звездным кино, музыка, свечи и утренний кофе — всё включено в аренду."
                : "Movie projector under stars, music, romantic lights, and hot brew kit — all in one box."}
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* CTA Book Button */}
            <button
              id="cta-intermediary-book-btn"
              onClick={() => handleOpenBooking()}
              className="px-8 py-4 bg-warm-gold text-forest font-black uppercase text-xs tracking-widest rounded-xl hover:bg-warm-gold/90 transition shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              {t.form.submit}
              <ArrowUpRight className="h-4 w-4" />
            </button>

            {/* CTA Dial Button */}
            <a
              href="tel:+998903893389"
              className="px-6 py-4 border border-warm-cream/30 hover:border-warm-cream bg-white/5 rounded-xl hover:bg-white/10 text-xs font-bold uppercase tracking-widest transition inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              +998 90 389 33 89
            </a>
          </div>
        </div>
      </section>

      {/* Packages / Pricing section */}
      <Packages
        currentLang={lang}
        onOpenBooking={(pkg) => handleOpenBooking(pkg)}
      />

      {/* Gallery / Results section */}
      <Results currentLang={lang} />

      {/* Testimonials / customer feedback section */}
      <Reviews currentLang={lang} />

      {/* Final Booking Contact Section right before Footer */}
      <section className="py-20 bg-white dark:bg-forest/10 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-warm-cream dark:bg-forest border-2 border-warm-gold/20 shadow-xl flex flex-col justify-between items-center relative overflow-hidden text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full z-10">
              <div className="md:col-span-7 space-y-4">
                <span className="p-1 px-3 bg-forest/5 dark:bg-warm-gold/10 text-forest dark:text-warm-gold text-xs font-extrabold tracking-wider uppercase rounded-full">
                  {lang === "UZB" ? "Hoziroq bog'laning" : lang === "RUS" ? "Свяжитесь прямо сейчас" : "Connect Instantly"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-forest dark:text-warm-cream">
                  {lang === "UZB" ? "Sizda qandaydir savollar bormi?" : lang === "RUS" ? "Остались какие-либо вопросы?" : "Do you have any questions?"}
                </h3>
                <p className="text-xs sm:text-sm text-forest/70 dark:text-warm-cream/70 leading-relaxed font-sans">
                  {lang === "UZB" 
                    ? "Wild Nest barcha kemping jihozlarini istalgan joyga professional yetkazib va o'rnatib beradi. Aloqaga chiqing va mutaxasislar jamoamizdan bepul maslahat oling!" 
                    : lang === "RUS" 
                      ? "Wild Nest доставит и подготовит всё для первоклассного досуга в горах или на озере. Свяжитесь и проконсультируйтесь бесплатно у наших гидов!"
                      : "Wild Nest delivers and establishes premium glamping setups on any spot. Contact us to get fully answered by custom adventure specialists!"}
                </p>
              </div>

              <div className="md:col-span-5 flex flex-col gap-3.5 w-full">
                {/* Instant Dial Box */}
                <a
                  href="tel:+998903893389"
                  className="w-full py-4 px-5 rounded-2xl bg-forest dark:bg-leaf text-warm-cream border border-forest dark:border-warm-gold/20 flex items-center justify-between text-left shadow hover:bg-forest/90 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-warm-gold/20 rounded-xl text-warm-gold group-hover:scale-105 transition">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-warm-gold uppercase tracking-wide">
                        {lang === "UZB" ? "Telefon orqali bog'lanish" : lang === "RUS" ? "Позвонить напрямую" : "Direct Phone Dial"}
                      </p>
                      <p className="text-sm font-black font-mono tracking-wide mt-0.5">
                        +998 90 389 33 89
                      </p>
                    </div>
                  </div>
                  <span className="text-xs">&rarr;</span>
                </a>

                {/* Instant Telegram Hook */}
                <a
                  href="https://t.me/wildnest_uz"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-5 rounded-2xl bg-white dark:bg-forest border-2 border-dashed border-warm-gold/30 flex items-center justify-between text-left shadow-sm hover:border-warm-gold transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-500/10 rounded-xl text-sky-500 group-hover:scale-105 transition">
                      <Send className="h-5 w-5 fill-sky-500/10" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-forest/50 dark:text-warm-cream/50 uppercase tracking-wide">
                        {lang === "UZB" ? "Telegram Kanal va Bot" : lang === "RUS" ? "Telegram канал и бот" : "Telegram Channel & Bot"}
                      </p>
                      <p className="text-sm font-extrabold text-forest dark:text-warm-cream mt-0.5">
                        @wildnest_uz
                      </p>
                    </div>
                  </div>
                  <span className="text-xs">&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Booking Dialog Modal with dynamic Operator Lounge leads logs checking */}
      <LeadForm
        currentLang={lang}
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedPackage={selectedPkg}
      />

      {/* Floating Sticky CTA Action Widget */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            className="fixed bottom-6 right-6 z-40 max-w-xs"
          >
            <button
              onClick={() => handleOpenBooking()}
              className="group bg-gradient-to-r from-warm-gold to-amber-500 text-forest font-black p-4 pr-6 rounded-2xl shadow-[0_15px_30px_rgba(210,157,82,0.4)] hover:shadow-[0_20px_35px_rgba(210,157,82,0.6)] flex items-center gap-3 transition-all duration-300 transform hover:scale-[1.05] border border-white/20 cursor-pointer"
            >
              <div className="w-10 h-10 bg-forest text-warm-gold rounded-xl flex items-center justify-center shadow-inner relative flex-shrink-0">
                <Tent className="w-5 h-5 fill-warm-gold/20" />
                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
                </span>
              </div>
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase font-bold text-forest/70 tracking-widest leading-none mb-1">
                  {lang === "UZB" ? "Oilaviy -10% Chegirma" : lang === "RUS" ? "Семейная скидка -10%" : "Family Coupon -10%"}
                </p>
                <p className="text-xs uppercase tracking-wider font-extrabold flex items-center gap-1 leading-none">
                  {lang === "UZB" ? "Band Qilish" : lang === "RUS" ? "Забронировать" : "Book Spot Now"}
                  <ArrowUpRight className="w-4 h-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layout Footer contacts info */}
      <Footer currentLang={lang} />

    </div>
  );
}
