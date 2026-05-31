import { Heart, Users2, Compass, Film, Coffee, Star } from "lucide-react";
import { Language, translations } from "../types";
import { motion } from "motion/react";

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const t = translations[currentLang];

  const experiences = [
    {
      title: t.about.exp1_title,
      desc: t.about.exp1_desc,
      icon: Heart,
      color: "from-rose-500/10 to-pink-500/10 dark:from-rose-500/5 dark:to-pink-500/5",
      iconColor: "text-rose-500",
    },
    {
      title: t.about.exp2_title,
      desc: t.about.exp2_desc,
      icon: Users2,
      color: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5",
      iconColor: "text-warm-gold",
      hasCustomImage: true, // Mark this to show our generated bonfire asset
    },
    {
      title: t.about.exp3_title,
      desc: t.about.exp3_desc,
      icon: Compass,
      color: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5",
      iconColor: "text-emerald-500",
    },
    {
      title: t.about.exp4_title,
      desc: t.about.exp4_desc,
      icon: Film,
      color: "from-purple-500/10 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5",
      iconColor: "text-purple-500",
    },
    {
      title: t.about.exp5_title,
      desc: t.about.exp5_desc,
      icon: Coffee,
      color: "from-amber-600/10 to-amber-800/10 dark:from-amber-600/5 dark:to-amber-800/5",
      iconColor: "text-amber-700 dark:text-warm-gold",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-forest/20 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-warm-gold border-b-2 border-warm-gold/30 pb-1.5 inline-block mb-3">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest dark:text-warm-cream tracking-tight mt-3">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-forest/70 dark:text-warm-cream/70 mt-4 leading-relaxed font-sans">
            {t.about.description}
          </p>
        </div>

        {/* Emotion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left Grid: The Emotive Blocks */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest dark:text-warm-cream flex items-center gap-2 mb-2">
              <Star className="text-warm-gold h-6 w-6 fill-warm-gold" />
              {t.about.experienceTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${exp.color} border border-warm-cream dark:border-leaf/10 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left`}
                >
                  <div className={`p-3 rounded-xl bg-white dark:bg-forest/80 shadow-sm mb-4 ${exp.iconColor}`}>
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold text-forest dark:text-warm-cream mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-forest/70 dark:text-warm-cream/70 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Spotlight: The Bonfire Experience Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-warm-cream dark:border-leaf/20 bg-forest dark:bg-leaf p-4 flex flex-col justify-between h-full group">
              
              {/* Image box */}
              <div className="rounded-2xl overflow-hidden relative mb-6">
                <img
                  src="/src/assets/images/wild_nest_bonfire_1780229693080.png"
                  alt="Do'stlar bilan qiziqarli kechalar"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover transition duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-warm-gold text-forest px-2.5 py-1 rounded-full">
                    REAL MEMORY
                  </span>
                </div>
              </div>

              {/* Spotlight description */}
              <div className="text-left px-2 pb-4">
                <h4 className="text-lg font-serif font-semibold text-warm-cream mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-warm-gold animate-pulse"></span>
                  {t.about.exp2_title}
                </h4>
                <p className="text-xs text-warm-cream/80 leading-relaxed font-sans mb-4">
                  {t.about.exp2_desc}
                </p>

                {/* Slogan block quote */}
                <div className="border-t border-warm-cream/10 pt-4 mt-4 italic text-center">
                  <p className="text-warm-gold text-sm font-serif">&ldquo;{t.about.quote}&rdquo;</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
