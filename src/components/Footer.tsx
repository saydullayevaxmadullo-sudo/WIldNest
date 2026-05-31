import { Compass, Mail, Phone, Send, Tent } from "lucide-react";
import { Language, translations } from "../types";

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];

  return (
    <footer className="bg-forest text-warm-cream pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-warm-cream/10">
          
          {/* Brand/Slogan column */}
          <div className="md:col-span-2 flex flex-col space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-warm-gold text-forest rounded-xl">
                <Tent className="h-5 w-5" />
              </div>
              <span className="text-lg font-serif font-black tracking-wide text-warm-cream">
                WILD NEST
              </span>
            </div>
            <p className="text-sm text-warm-cream/70 leading-relaxed font-sans max-w-sm">
              {t.footer.slogan}
            </p>
            <p className="text-xs text-warm-cream/50 uppercase tracking-widest font-extrabold pt-2">
              Joying Nature. Creating Memories.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-left flex flex-col space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-warm-gold">
              {t.footer.pages}
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-warm-cream/80 font-medium">
              <a href="#home" className="hover:text-warm-gold transition duration-200">
                {t.nav.home}
              </a>
              <a href="#about" className="hover:text-warm-gold transition duration-200">
                {t.nav.about}
              </a>
              <a href="#packages" className="hover:text-warm-gold transition duration-200">
                {t.nav.packages}
              </a>
              <a href="#results" className="hover:text-warm-gold transition duration-200">
                {t.nav.results}
              </a>
              <a href="#reviews" className="hover:text-warm-gold transition duration-200">
                {t.nav.reviews}
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-warm-gold">
              {t.footer.contact}
            </h4>
            <div className="flex flex-col space-y-3.5 text-xs text-warm-cream/90 font-medium font-sans">
              <a href="tel:+998903893389" className="flex items-center gap-2 group hover:text-warm-gold transition">
                <div className="p-1.5 bg-warm-cream/5 rounded text-warm-gold">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span>+998 90 389 33 89</span>
              </a>
              
              <a href="https://t.me/wildnest_uz" target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:text-warm-gold transition">
                <div className="p-1.5 bg-warm-cream/5 rounded text-warm-gold">
                  <Send className="h-3.5 w-3.5" />
                </div>
                <span>@wildnest_uz</span>
              </a>

              <a href="https://t.me/wildnest_channel" target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:text-warm-gold transition">
                <div className="p-1.5 bg-warm-cream/5 rounded text-warm-gold">
                  <Compass className="h-3.5 w-3.5" />
                </div>
                <span>{t.footer.telegramChannel}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-warm-cream/40">
          <p>&copy; {new Date().getFullYear()} Wild Nest. {t.footer.rights}</p>
          <div className="flex gap-4 mt-4 sm:mt-0 uppercase tracking-widest font-black text-[9px]">
            <span>Uzbekistan</span>
            <span>&bull;</span>
            <span>Premium Glamping Rental</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
