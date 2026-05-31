import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tent, Menu, X, Sun, Moon, Globe, Phone } from "lucide-react";
import { Language, Theme, translations } from "../types";

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  currentTheme: Theme;
  toggleTheme: () => void;
  onOpenBooking: (pkgName?: string) => void;
}

export default function Navbar({
  currentLang,
  setLang,
  currentTheme,
  toggleTheme,
  onOpenBooking,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[currentLang];

  const menuItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.packages, href: "#packages" },
    { label: t.nav.results, href: "#results" },
    { label: t.nav.reviews, href: "#reviews" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "UZB", label: "O'zbekcha" },
    { code: "RUS", label: "Русский" },
    { code: "ENG", label: "English" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-forest/80 border-b border-warm-cream/20 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" id="nav-logo-link" className="flex items-center gap-2 group">
            <div className="p-2.5 bg-forest dark:bg-warm-gold text-warm-gold dark:text-forest rounded-xl transition duration-300 transform group-hover:scale-105">
              <Tent className="h-6 w-6" id="logo-icon" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-serif tracking-tight text-forest dark:text-warm-cream">
                WILD NEST
              </span>
              <span className="text-[9px] uppercase tracking-widest text-warm-gold font-medium">
                Joying nature. Creating memories.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center font-sans font-medium text-sm text-forest/80 dark:text-warm-cream/80">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-warm-gold dark:hover:text-warm-gold transition duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-warm-gold after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Toolbar Utilities (Theme, Lang, CTA) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 text-forest/80 dark:text-warm-cream/80 hover:bg-warm-cream/50 dark:hover:bg-leaf/40 rounded-full transition-colors duration-200 cursor-pointer"
              title="Toggle Theme"
            >
              {currentTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                id="lang-selector-btn"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 p-2 text-forest/80 dark:text-warm-cream/80 hover:bg-warm-cream/50 dark:hover:bg-leaf/40 rounded-full transition-colors duration-200 cursor-pointer"
                title="Change Language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs uppercase font-extrabold">{currentLang}</span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <>
                    {/* Click outside backdrop */}
                    <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)}></div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-36 bg-white dark:bg-forest border border-warm-cream/10 rounded-xl shadow-xl py-1.5 z-20 text-sm overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLang(lang.code);
                            setLangMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-warm-cream/50 dark:hover:bg-leaf/40 transition-colors uppercase font-medium flex items-center justify-between ${
                            currentLang === lang.code
                              ? "text-warm-gold font-bold"
                              : "text-forest/80 dark:text-warm-cream/80"
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <a
              id="header-cta-link"
              href="#packages"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-forest to-leaf group-hover:from-forest group-hover:to-leaf hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <button
                onClick={() => onOpenBooking()}
                className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-forest dark:text-warm-cream hover:text-warm-cream"
              >
                {t.nav.bookNow}
              </button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="theme-toggle-btn-m"
              onClick={toggleTheme}
              className="p-1.5 text-forest/80 dark:text-warm-cream/80 rounded-full"
            >
              {currentTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <div className="relative">
              <button
                id="lang-selector-btn-m"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 p-1.5 text-forest/80 dark:text-warm-cream/80 rounded"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs uppercase font-extrabold">{currentLang}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-forest border border-warm-cream/20 shadow-lg z-50 py-1 rounded">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className="block w-full text-left text-xs uppercase px-3 py-1.5 font-semibold text-forest dark:text-warm-cream hover:bg-warm-cream/30"
                    >
                      {l.code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-forest dark:text-warm-cream cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-forest border-t border-warm-cream/10 px-4 pt-2 pb-6 space-y-3 shadow-inner overflow-hidden"
          >
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-4 rounded-xl text-base font-medium text-forest/80 dark:text-warm-cream/80 hover:bg-warm-cream/50 dark:hover:bg-leaf/30 hover:text-warm-gold transition"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-warm-cream/10 flex flex-col gap-3 px-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-3 bg-warm-gold hover:bg-warm-gold/90 text-forest font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Tent className="h-4 w-4" />
                {t.nav.bookNow}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
