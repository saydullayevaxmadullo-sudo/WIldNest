import { Star, Quote, Milestone } from "lucide-react";
import { Language, translations } from "../types";
import { motion } from "motion/react";

interface ReviewsProps {
  currentLang: Language;
}

interface Testimonial {
  name: string;
  role: string;
  tripType: string;
  text: string;
  rating: number;
}

export default function Reviews({ currentLang }: ReviewsProps) {
  const t = translations[currentLang];

  const testimonialsUZB: Testimonial[] = [
    {
      name: "Diyorbek Saydullayev",
      role: "IT Loyiha menejeri",
      tripType: "Do'stlar bilan kemping (Chorvoq)",
      text: "Wild Nest jamoasiga katta rahmat! Ayniqsa proyektor va kofe to'plami tog' sharoitida o'zgacha shinamlik berdi. Boshqa kempinglar kabi sovuqda qiynalmadik. Ustalar kelib o'zlari o'rnatib berishdi va yig'ib ketishdi. Juda ham qulay xizmat!",
      rating: 5
    },
    {
      name: "Shahnoza & Farrux",
      role: "Musiqachi va Visual Artist",
      tripType: "Romantik uchrashuv (Zomin)",
      text: "Zomindagi archalar o'rtasida ajoyib romantik oqshom o'tkazdik. Shamlar, LED gilyandalar va shinam kemping krovat xuddi ertakdagidek edi. Sevgan insoningiz bilan ajoyib xotiralar qoldirish uchun ideal variant.",
      rating: 5
    },
    {
      name: "Jasur Rizo",
      role: "Bloger / Sayohat ishqibozi",
      tripType: "Yovvoyi tabiat sarguzashti (Tuzkon ko'li)",
      text: "Oila a'zolarimiz bilan yovvoyi Tuzkon ko'li bo'yiga ijaraga oldik. Bolalar juda xursand bo'lishdi, 10% lik oilaviy chegirma ham yoqimli bo'ldi. Chodir sifati juda zo'r — hatto shamolda ham mustahkam turdi.",
      rating: 5
    }
  ];

  const testimonialsRUS: Testimonial[] = [
    {
      name: "Диёрбек Саидуллаев",
      role: "IT Проект-менеджер",
      tripType: "С друзьями на Чарваке",
      text: "Огромное спасибо команде Wild Nest! Проектор и кофейный набор создали невероятный уют в горах. Нам не нужно было мерзнуть, как при обычном кемпинге. Ребята приехали, собрали и позже аккуратно разобрали всё.",
      rating: 5
    },
    {
      name: "Шахноза и Фаррух",
      role: "Музыканты",
      tripType: "Романтический уикенд (Заамин)",
      text: "Мы провели сказочную ночь среди многовековых елей Заамина. Свечи, гирлянды, согревающий чай под музыку — абсолютная сказка. Идеально для того, чтобы запечатлеть лучшие совместные эмоции.",
      rating: 5
    },
    {
      name: "Джасур Ризо",
      role: "Блогер / Путешественник",
      tripType: "Выезд со всей семьей (озеро Тузкан)",
      text: "Заказали VIP и ни капли не пожалели. Семье сделали скидку 10%. Палатка выдержала ночной ветер на Тузкане без проблем, внутри было очень тепло. Рекомендую абсолютно каждому отдохнуть так хотя бы раз!",
      rating: 5
    }
  ];

  const testimonialsENG: Testimonial[] = [
    {
      name: "Diyorbek Saydullayev",
      role: "IT Project Manager",
      tripType: "Friends getaway (Charvak)",
      text: "Big thanks to the Wild Nest crew! The HD movie projector and gourmet drip coffee kit brought pure luxury to the wild. Unlike basic camps, we slept warm. The setup team assembled and packed everything seamlessly.",
      rating: 5
    },
    {
      name: "Shahnoza & Farrux",
      role: "Creative Artists",
      tripType: "Romantic Honeymoon (Zaamin mountains)",
      text: "We spent a magical, starry evening surrounded by clean alpine air. The warm flickering wax candles and beautiful fairy lights were like straight out of a Disney movie. Pure memories indeed!",
      rating: 5
    },
    {
      name: "Jasur Rizo",
      role: "Travel Vlogger",
      tripType: "Wild family camping (Tuzkan Lakeside)",
      text: "Rented the VIP Safari package for my family and toddler. Generous 10% family coupon was automatically credited. The waterproof tent was super robust against evening lake winds. 10/10 recommendation!",
      rating: 5
    }
  ];

  const currentTestimonials = currentLang === "UZB"
    ? testimonialsUZB
    : currentLang === "RUS"
      ? testimonialsRUS
      : testimonialsENG;

  return (
    <section id="reviews" className="py-24 bg-warm-cream/10 dark:bg-earth-dark/40 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-warm-gold border-b-2 border-warm-gold/30 pb-1.5 inline-block mb-3">
            {t.reviews.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest dark:text-warm-cream tracking-tight mt-3">
            {t.reviews.title}
          </h2>
          <p className="text-sm sm:text-base text-forest/70 dark:text-warm-cream/70 mt-3 font-sans">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((test, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white dark:bg-forest/40 border border-warm-cream/50 dark:border-leaf/15 shadow-md flex flex-col justify-between text-left transition duration-300 relative overflow-hidden"
            >
              {/* Giant quote decorator */}
              <div className="absolute right-6 top-6 text-forest/5 dark:text-warm-gold/5">
                <Quote className="h-16 w-16 transform scale-x-[-1]" />
              </div>

              {/* Star Rating details */}
              <div>
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-warm-gold fill-warm-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-forest/80 dark:text-warm-cream/80 leading-relaxed font-sans mb-6 italic">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Guest Profile and context */}
              <div className="border-t border-forest/10 dark:border-warm-cream/10 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest dark:bg-warm-gold text-warm-gold dark:text-forest flex items-center justify-center font-bold text-sm">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest dark:text-warm-cream">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-forest/50 dark:text-warm-cream/50 font-bold uppercase tracking-wider mt-0.5">
                    {test.role}
                  </p>
                  <p className="text-[10px] text-warm-gold font-bold flex items-center gap-1 mt-1 font-mono uppercase">
                    <Milestone className="h-3 w-3" />
                    {test.tripType}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
