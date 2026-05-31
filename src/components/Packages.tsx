import { Check, Star, ShieldCheck, Truck, Wrench, Sparkles, Trash2, Tag, Tent } from "lucide-react";
import { Language, translations } from "../types";
import { motion } from "motion/react";

interface PackagesProps {
  currentLang: Language;
  onOpenBooking: (packageName: string) => void;
}

export default function Packages({ currentLang, onOpenBooking }: PackagesProps) {
  const t = translations[currentLang];

  const tiers = [
    {
      id: "basic",
      name: t.packages.tiers.basic.name,
      price: "500 000",
      desc: t.packages.tiers.basic.desc,
      comfortScore: 3,
      features: t.packages.tiers.basic.features,
      isPopular: false,
      color: "border-warm-cream dark:border-leaf/20 bg-white dark:bg-forest/30",
      badgeColor: "bg-forest/5 text-forest dark:bg-warm-cream/5 dark:text-warm-cream",
    },
    {
      id: "comfort",
      name: t.packages.tiers.comfort.name,
      price: "1 100 000",
      desc: t.packages.tiers.comfort.desc,
      comfortScore: 4.8,
      features: t.packages.tiers.comfort.features,
      isPopular: true,
      color: "border-warm-gold/60 bg-gradient-to-br from-white to-warm-cream/20 dark:from-forest/40 dark:to-leaf/20 shadow-xl relative scale-105 z-10",
      badgeColor: "bg-warm-gold text-forest",
    },
    {
      id: "luxury",
      name: t.packages.tiers.luxury.name,
      price: "2 200 000",
      desc: t.packages.tiers.luxury.desc,
      comfortScore: 5,
      features: t.packages.tiers.luxury.features,
      isPopular: false,
      color: "border-forest dark:border-warm-gold/40 bg-white dark:bg-forest/30",
      badgeColor: "bg-forest text-warm-cream dark:bg-warm-gold/20 dark:text-warm-gold",
    },
  ];

  const qualityFeatures = [
    {
      title: t.features.guarantee,
      desc: t.features.guaranteeDesc,
      icon: ShieldCheck,
    },
    {
      title: t.features.delivery,
      desc: t.features.deliveryDesc,
      icon: Truck,
    },
    {
      title: t.features.setup,
      desc: t.features.setupDesc,
      icon: Wrench,
    },
    {
      title: t.features.clean,
      desc: t.features.cleanDesc,
      icon: Trash2,
    },
    {
      title: t.features.discount,
      desc: t.features.discountDesc,
      icon: Tag,
    },
  ];

  return (
    <section id="packages" className="py-24 bg-warm-cream/20 dark:bg-earth-dark/30 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-warm-gold border-b-2 border-warm-gold/30 pb-1.5 inline-block mb-3">
            {t.packages.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest dark:text-warm-cream tracking-tight mt-3">
            {t.packages.title}
          </h2>
          <p className="text-sm sm:text-base text-forest/70 dark:text-warm-cream/70 mt-3 font-sans">
            {t.packages.subtitle}
          </p>
        </div>

        {/* 3 Tiers Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div
              key={tier.id}
              className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 ${tier.color}`}
            >
              {/* Floating Best Seller overlay */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-warm-gold text-forest font-black tracking-widest text-[10px] uppercase py-1.5 px-4 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="h-3 w-3 fill-forest" />
                  BEST SELLER
                </div>
              )}

              {/* Title & Comfort Indicator */}
              <div className="text-left">
                <div className="flex justify-between items-start gap-2 mb-4">
                  <h3 className="text-xl font-serif font-bold text-forest dark:text-warm-cream uppercase tracking-wide">
                    {tier.name}
                  </h3>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${tier.badgeColor}`}>
                    {tier.id === "comfort" ? "Popular" : tier.id === "luxury" ? "VIP" : "Cozy"}
                  </span>
                </div>

                {/* Comfort Level Gauge */}
                <div className="flex items-center gap-1.5 mb-6">
                  <span className="text-[10px] font-extrabold tracking-wider text-forest/60 dark:text-warm-cream/60 uppercase">
                    {t.packages.comfortLevel}:
                  </span>
                  <div className="flex gap-0.5" title={`${tier.comfortScore} / 5`}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3 w-3 ${
                          star <= Math.round(tier.comfortScore)
                            ? "text-warm-gold fill-warm-gold"
                            : "text-gray-300 dark:text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-forest/70 dark:text-warm-cream/70 leading-relaxed mb-6 font-sans">
                  {tier.desc}
                </p>

                {/* Pricing Block */}
                <div className="border-t border-b border-forest/10 dark:border-warm-cream/10 py-5 mb-8 text-left">
                  <span className="text-xs text-forest/50 dark:text-warm-cream/50 uppercase font-bold tracking-wider">
                    {t.hero.rentPriceLabel}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-extrabold text-forest dark:text-warm-cream font-mono">
                      {tier.price}
                    </span>
                    <span className="text-sm font-bold text-forest/70 dark:text-warm-cream/70">
                      {t.packages.currency} / {t.packages.perDay}
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3.5 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-left">
                      <div className="p-0.5 rounded-full bg-forest/5 dark:bg-warm-gold/10 text-forest dark:text-warm-gold mt-0.5 shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs text-forest/80 dark:text-warm-cream/80 font-medium font-sans leading-tight">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Booking Button (CTA) */}
              <button
                id={`book-${tier.id}-btn`}
                onClick={() => onOpenBooking(tier.name)}
                className={`w-full py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  tier.isPopular
                    ? "bg-forest hover:bg-forest/90 text-warm-cream border border-forest dark:bg-warm-gold dark:hover:bg-warm-gold/90 dark:text-forest dark:border-warm-gold shadow-lg transform hover:-translate-y-0.5"
                    : "bg-transparent border border-forest/20 hover:border-forest hover:bg-forest/5 text-forest dark:border-warm-cream/20 dark:hover:border-warm-cream dark:hover:bg-warm-cream/5 dark:text-warm-cream"
                }`}
              >
                <Tent className="h-4 w-4" />
                {t.packages.bookButton}
              </button>
            </div>
          ))}
        </div>

        {/* Quality Features Block (Bottom Icons layout) */}
        <div id="guarantees" className="pt-16 border-t border-forest/10 dark:border-warm-cream/10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {qualityFeatures.map((feat, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-forest/20 border border-warm-cream/30 dark:border-leaf/10 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-xl bg-forest/5 dark:bg-warm-gold/10 text-forest dark:text-warm-gold flex items-center justify-center mb-4">
                  <feat.icon className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold text-forest dark:text-warm-cream mb-1 uppercase tracking-wider leading-snug">
                  {feat.title}
                </h4>
                <p className="text-[10px] text-forest/70 dark:text-warm-cream/70 leading-relaxed font-sans">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
