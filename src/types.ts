export type Language = 'UZB' | 'RUS' | 'ENG';

export type Theme = 'light' | 'dark';

export interface TranslationDict {
  nav: {
    home: string;
    about: string;
    packages: string;
    results: string;
    reviews: string;
    bookNow: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    rentPriceLabel: string;
    rentPrice: string;
    familyDiscountTag: string;
    includedCountLabel: string;
    includedTitle: string;
    includedItems: {
      tent: string;
      tentDesc: string;
      mattress: string;
      mattressDesc: string;
      projector: string;
      projectorDesc: string;
      speaker: string;
      speakerDesc: string;
      coffee: string;
      coffeeDesc: string;
      candles: string;
      candlesDesc: string;
    };
    underBadge: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    experienceTitle: string;
    exp1_title: string;
    exp1_desc: string;
    exp2_title: string;
    exp2_desc: string;
    exp3_title: string;
    exp3_desc: string;
    exp4_title: string;
    exp4_desc: string;
    exp5_title: string;
    exp5_desc: string;
    quote: string;
  };
  features: {
    guarantee: string;
    guaranteeDesc: string;
    delivery: string;
    deliveryDesc: string;
    setup: string;
    setupDesc: string;
    clean: string;
    cleanDesc: string;
    discount: string;
    discountDesc: string;
  };
  packages: {
    badge: string;
    title: string;
    subtitle: string;
    currency: string;
    perDay: string;
    bookButton: string;
    comfortLevel: string;
    tiers: {
      basic: {
        name: string;
        desc: string;
        features: string[];
      };
      comfort: {
        name: string;
        desc: string;
        features: string[];
      };
      luxury: {
        name: string;
        desc: string;
        features: string[];
      };
    };
  };
  results: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterCouple: string;
    filterFriends: string;
    filterAdventure: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
  };
  form: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    phone: string;
    packageSelect: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    errorText: string;
    telegramDirect: string;
    orCall: string;
    close: string;
  };
  footer: {
    slogan: string;
    rights: string;
    pages: string;
    contact: string;
    telegramChannel: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  UZB: {
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      packages: "Tariflar",
      results: "Natijalar",
      reviews: "Mijozlar fikri",
      bookNow: "Band qilish"
    },
    hero: {
      tagline: "Tabiat qo'ynida unutilmas dam oling!",
      title: "Chodir emas - bu xotiralar maskani.",
      subtitle: "Faqat sumkangizni oling – qolganini biz tayyorlaymiz ♡",
      rentPriceLabel: "KUNLIK IJARA NARXI",
      rentPrice: "500 000 SO'M-dan",
      familyDiscountTag: "OYLAVIY DAM OLUVCHILARGA REZERVATSIYA UCHUN 10% CHEGIRMA",
      includedCountLabel: "KATTA TO'PLAM:",
      includedTitle: "TO'LIQ KOMPLEKTGA NIMALAR KIRADI",
      includedItems: {
        tent: "Katta Estetik Chodir",
        tentDesc: "Yomg'irdan himoyalangan, keng sig'imli va shamollatish tizimiga ega.",
        mattress: "Yumshoq Matras",
        mattressDesc: "Yumshoq choyshablar va qulay yostiqlar bilan birga.",
        projector: "Kino Proyektor",
        projectorDesc: "Tabiat qo'ynida yulduzli osmon ostida sevimli kinolaringiz salkam kinoteatrdagidek.",
        speaker: "Bluetooth Kolonka",
        speakerDesc: "Premium ovoz balandligi bilan yoqimli musiqa ifori.",
        coffee: "Kofe To'plami",
        coffeeDesc: "Yangi damlangan tonggi kofeingiz uchun maxsus idishlar to'plami.",
        candles: "Sham va Chiroqlar",
        candlesDesc: "Chaqnayotgan gurlan shamlar va LED gilyandalar bilan romantik muhit."
      },
      underBadge: "Hamma narsa ijaraga bilan birga yetkaziladi!"
    },
    about: {
      badge: "BIZNING FALSAFA",
      title: "Biz bilan unutilmas xotiralar quring!",
      subtitle: "Wild Nest tabiat bilan uyg'unlikda, dabdabali qulaylik bilan sarguzasht yaratishga yordam beradi.",
      description: "Chodir tikish, o'tin terish, sovuq yerda uxlash haqida unuting. Biz sizga butunlay boshqa darajadagi estetik glamping va tabiat quchog'idagi osoyishtalikni tuhfa etamiz. Tog'lar cho'qqisida yoki ko'l bo'yida barcha jihozlar tayyorlab beriladi.",
      experienceTitle: "Biz bilan unutilmas xotiralar quring:",
      exp1_title: "Sevgan inson bilan sokinlik",
      exp1_desc: "Dunyo g'urbatidan yiroq bo'lgan, faqat shamlar yoritilgan va ikki qalb suhbati.",
      exp2_title: "Do'stlar bilan qiziqarli kechalar",
      exp2_desc: "Gitarada qo'shiqlar, qarsillagan bonfire olovi va samimiy kulgular.",
      exp3_title: "Yangi joylar, yangi hikoyalar",
      exp3_desc: "Har bir yangi manzil — bu hayotingiz kitobidagi unutilmas sahifadir.",
      exp4_title: "Yulduzlar ostida kino kechalari",
      exp4_desc: "To'liq ekranli proyektor va cho'g'day charaqlagan yulduzlar bilan ochiq osmon ostida sevimli film.",
      exp5_title: "Tongda kofe va tabiat",
      exp5_desc: "Erta tonggi salqinda tabiat iforidan va yangi damlangan kofe uyg'unligidan bahra olish.",
      quote: "Har dam olish — bir xotira, har xotira — bir umr. ♡"
    },
    features: {
      guarantee: "SIFAT KAFOLATI",
      guaranteeDesc: "Har bir jihoz va chodir har safar sterillanadi va toza holda yetkaziladi.",
      delivery: "TEZKOR YETKAZISH",
      deliveryDesc: "Belgilangan hududingizga barcha jihozlar tezda olib boriladi.",
      setup: "O'RNATIB BERISH",
      setupDesc: "Ustalarimiz chodir va barcha texnikalarni o'zlari professional o'rnatishadi.",
      clean: "YIG'IB OLISH XIZMATI",
      cleanDesc: "Siz dam olib bo'lgach, barcha jihozlarni o'zimiz tozalab, yig'ib ketamiz.",
      discount: "MAXSUS CHEGIRMA",
      discountDesc: "Oila a'zolari va guruhlar uchun o'ziga xos takliflar va imtiyozlar mavjud."
    },
    packages: {
      badge: "TARIFLARIMIZ",
      title: "O'z qulaylik darajangizni tanlang",
      subtitle: "Turli sarguzasht ishqibozlari uchun dabdabali 3 xil eksklyuziv tarif.",
      currency: "SO'M",
      perDay: "kun",
      bookButton: "Band qilish",
      comfortLevel: "Qulaylik",
      tiers: {
        basic: {
          name: "Chilla Nest (Basic)",
          desc: "Tabiat bilan boshlang'ich uchrashuv uchun ideal tanlov. Minimalizm va estetika.",
          features: [
            "Premium suv o'tkazmaydigan chodir (3x3m)",
            "Yumshoq kemping matras va matras qoplami",
            "Yoritish tizimi (LED fonarlar)",
            "Klassik kemping stul va stoli",
            "Olov tayyorlash uchun kichik to'plam",
            "Estetik retro bezaklar"
          ]
        },
        comfort: {
          name: "Sokinlik Nest (Comfort)",
          desc: "Bizning eng mashhur to'plamimiz. Tabiat bag'rida shinamlik hamda dabdabali dam olish uyg'unligi.",
          features: [
            "Kengaytirilgan estetik kemping chodiri (4x4m)",
            "Ortopedik shinam to'shak va iliq ko'rpa",
            "Cinema proyektor va 80 dyuymli ekran",
            "Premium bluetooth dinamik-speaker",
            "Eksklyuziv kofe/choy tayyorlash to'plami va xushbo'y shamlar",
            "Uzoq yona oladigan sifatli ko'mir va o'tin to'plami",
            "2 ta premium o'rindiq va shinam dasturxon",
            "Ichki bezaklar va yumshoq fon chiroqlari"
          ]
        },
        luxury: {
          name: "Wild Horizon (VIP/Luxury)",
          desc: "Siz uchun maxsus yaratiladigan to'liq xizmatli dabdabali glamping sarguzashti.",
          features: [
            "O'ta keng premium safari chodiri (5x5m)",
            "Mehmonxona darajasidagi toshak va ipak choyshablar",
            "Ultra HD Proyektor, Apple TV yoki kino-pleyer",
            "JBL Premium ovoz tizimi",
            "Professional kofe va noz-ne'matlar to'plami (Meva, shirinliklar)",
            "Maxsus barbekyu gril va to'liq oshpazlik to'plami",
            "Bepul yetkazib berish, to'liq o'rnatish va keyin yig'ib olish",
            "Oila uchun 10% chegirma imkoniyati",
            "Shaxsiy foto-sessiya uchun estetik foto-hudud bezagi"
          ]
        }
      }
    },
    results: {
      badge: "NATIJALAR",
      title: "Mijozlarimiz yaratgan xotiralar",
      subtitle: "Tog'lar, ko'llar va chiroyli lahzalar tasvirlangan haqiqiy suratlar.",
      filterAll: "Barchasi",
      filterCouple: "Romantika va Juftlik",
      filterFriends: "Do'stlar Davrasi",
      filterAdventure: "Yovvoyi Sarguzasht"
    },
    reviews: {
      badge: "MIJOZLAR FIKRI",
      title: "Biz haqimizda nima deyishadi?",
      subtitle: "Wild Nest tajribasini boshidan kechirgan mijozlarimizning samimiy emotsiyalari."
    },
    form: {
      title: "Sarguzashtingizni band qiling",
      subtitle: "Ma'lumotlaringizni qoldiring va biz siz uchun unutilmas dam olish zonasini tashkil qilamiz.",
      firstName: "Ism va Familiyangiz",
      lastName: "Viloyatingiz",
      phone: "Telefon raqamingiz",
      packageSelect: "Tarifni tanlang",
      submit: "Sarguzashtni band qilish",
      submitting: "Yuborilmoqda...",
      successTitle: "Ajoyib Tanlov! 🎉",
      successText: "Sizning ma'lumotlaringiz muvaffaqiyatli qabul qilindi. Wild Nest jamoasi tez orada siz bilan bog'lanib barcha tafsilotlarni kelishib oladi.",
      errorText: "Xabarni yuborishda xatolik yuz berdi. Iltimos, pastdagi telefon yoki telegram orqali bog'laning.",
      telegramDirect: "O'zingiz telegramdan yozing",
      orCall: "Yoki hoziroq qo'ng'roq qiling:",
      close: "Yopish"
    },
    footer: {
      slogan: "Wild Nest — Chodir emas, bu xotiralar maskani.",
      rights: "Barcha huquqlar himoyalangan.",
      pages: "Sahifalar",
      contact: "Kontaktlar",
      telegramChannel: "Telegram Kanalimiz"
    }
  },
  RUS: {
    nav: {
      home: "Главная",
      about: "О нас",
      packages: "Тарифы",
      results: "Наши Работы",
      reviews: "Отзывы",
      bookNow: "Забронировать"
    },
    hero: {
      tagline: "Незабываемый отдых на лоне природы!",
      title: "Это не просто палатка – это обитель воспоминаний.",
      subtitle: "Просто соберите сумку – обо всем остальном позаботимся мы ♡",
      rentPriceLabel: "СТОИМОСТЬ АРЕНДЫ В СУТКИ",
      rentPrice: "от 500 000 СУМ",
      familyDiscountTag: "СЕМЕЙНЫМ ПАРАМ И СЕМЬЯМ С КИДКОЙ 10% ПРИ БРОНИРОВАНИИ",
      includedCountLabel: "БОЛЬШОЙ КОМПЛЕКТ:",
      includedTitle: "ЧТО ВХОДИТ В ПОЛНЫЙ КОМПЛЕКТ",
      includedItems: {
        tent: "Большая эстетичная палатка",
        tentDesc: "Водонепроницаемая, просторная и снабженная системой вентиляции.",
        mattress: "Мягкий матрас",
        mattressDesc: "С чистым постельным бельем и уютными подушками.",
        projector: "Кинопроектор",
        projectorDesc: "Любимые фильмы под открытым звездным небом прямо на природе.",
        speaker: "Bluetooth Колонка",
        speakerDesc: "Приятный музыкальный фон с качественным объемным звуком.",
        coffee: "Кофейный набор",
        coffeeDesc: "Специальный кофейный сет для ароматного бодрого утра.",
        candles: "Свечи и гирлянды",
        candlesDesc: "Романтическая атмосфера с мерцающими свечами и мягкими LED-огоньками."
      },
      underBadge: "Всё сдается и доставляется в комплекте!"
    },
    about: {
      badge: "НАША ФИЛОСОФИЯ",
      title: "Создавайте незабываемые воспоминания вместе с нами!",
      subtitle: "Wild Nest соединяет дикую природу с роскошным комфортом, создавая подлинное приключение.",
      description: "Забудьте о муках установки палаток, собирании дров и сне на холодной сырой земле. Мы предлагаем вам совершенно иной уровень глэмпинга на вершине гор или на берегу озера с готовым комплектом вашей мечты.",
      experienceTitle: "Создавайте незабываемые воспоминания вместе с нами:",
      exp1_title: "Спокойствие с любимым человеком",
      exp1_desc: "Вдали от суеты, при мягком свете свечей и согревающих душу разговорах.",
      exp2_title: "Душевные вечера с близкими друзьями",
      exp2_desc: "Песни под гитару у костра, хруст дров и искренний смех.",
      exp3_title: "Новые места – новые истории",
      exp3_desc: "Каждая новая живописная точка — это лучшая глава вашей книги жизни.",
      exp4_title: "Кинотеатр под сияющим звездным небом",
      exp4_desc: "Уютные пледы, горячий чай и любимая кинолента на большом проекторе.",
      exp5_title: "Ароматный утренний кофе на природе",
      exp5_desc: "Прохладный утренний горный воздух и чашечка свежесваренного эксклюзивного кофе.",
      quote: "Каждый отдых — это память, каждая память — это целая жизнь. ♡"
    },
    features: {
      guarantee: "ГАРАНТИЯ КАЧЕСТВА",
      guaranteeDesc: "Каждый комплект и палатка дезинфицируются и стираются перед каждой арендой.",
      delivery: "БЫСТРАЯ ДОСТАВКА",
      deliveryDesc: "Мы оперативно привезем весь глэмпинг-комплект в выбранную точку отдыха.",
      setup: "ПРОФЕССИОНАЛЬНАЯ УСТАНОВКА",
      setupDesc: "Наши мастера сами соберут палатку и подключат всё аудио-видео оборудование.",
      clean: "СБОРКА И ЧИСТКА",
      cleanDesc: "После окончания вашего отдыха мы приедем, очистим локацию и бережно заберем вещи.",
      discount: "СПЕЦИАЛЬНАЯ СКИДКА",
      discountDesc: "Для семейных пар с детьми и групп друзей действуют льготные тарифные условия."
    },
    packages: {
      badge: "НАШИ ТАРИФЫ",
      title: "Выберите свой уровень комфорта",
      subtitle: "Три эксклюзивных предложения для яркого уикенда на любой вкус.",
      currency: "СУМ",
      perDay: "день",
      bookButton: "Забронировать",
      comfortLevel: "Комфорт",
      tiers: {
        basic: {
          name: "Chilla Nest (Базовый)",
          desc: "Идеально для первого трепетного знакомства с эстетикой дикой природы. Минималистично и стильно.",
          features: [
            "Премиальная водонепроницаемая палатка (3x3м)",
            "Мягкий матрас и чистые спальные мешки/белье",
            "Осветительные LED-фонари",
            "Классические походные стулья и столик",
            "Компактный набор для разжигания костра",
            "Эстетичный ретро-декор зоны"
          ]
        },
        comfort: {
          name: "Sokinlik Nest (Комфорт)",
          desc: "Наш абсолютный бестселлер. Идеальный баланс уюта, романтики и современных технологий в горах.",
          features: [
            "Увеличенная роскошная колоколообразная палатка (4x4м)",
            "Ортопедическое ложе, нежное белье и теплые одеяла",
            "Светодиодный портативный проектор и экран 80\" для кино",
            "Премиум колонка Bluetooth с глубоким басом",
            "Набор для заваривания кофе методом дрип и ароматические свечи",
            "Большая охапка премиальных дров и угли",
            "Два уютных мягких кресла",
            "Декоративные гирлянды на батарейках для полного уюта"
          ]
        },
        luxury: {
          name: "Wild Horizon (VIP/Люкс)",
          desc: "Ультра-роскошный уровень проведения досуга на дикой природе. Продумано всё до мелочей.",
          features: [
            "Огромный роскошный сафари-тент (5x5м)",
            "Кровать ресторанно-отельного уровня с качественным хлопком",
            "Проектор Ultra HD 4K c медиабоксом Apple TV",
            "Акустическая аудиосистема JBL Premium",
            "Профессиональный кофейный сет и свежие корзины фруктов и сладостей",
            "Продвинутый гриль-барбекю со всеми кухонными девайсами",
            "Бесплатная доставка, установка силами команды и сбор назад",
            "Право на 10% скидку для семейных пар",
            "Оформление уютной тематической фотозоны для ваших шедевров"
          ]
        }
      }
    },
    results: {
      badge: "РАБОТЫ",
      title: "Моменты, застывшие во времени",
      subtitle: "Реальные кадры наших гостей из самых живописных уголков природы.",
      filterAll: "Все",
      filterCouple: "Для пар",
      filterFriends: "В кругу друзей",
      filterAdventure: "Дикое путешествие"
    },
    reviews: {
      badge: "ОТЗЫВЫ КЛИЕНТОВ",
      title: "Что о нас говорят?",
      subtitle: "Искренние слова радости и удивления от тех, кто доверился Wild Nest."
    },
    form: {
      title: "Забронируйте ваше приключение",
      subtitle: "Оставьте заявку, и наша команда свяжется с вами, чтобы обсудить все детали.",
      firstName: "Имя и Фамилия",
      lastName: "Область / Регион",
      phone: "Номер телефона",
      packageSelect: "Выберите желаемый тариф",
      submit: "Получить предложение",
      submitting: "Отправка...",
      successTitle: "Отличный Выбор! 🎉",
      successText: "Ваши данные успешно отправлены. Специалист Wild Nest перезвонит вам в течение короткого времени, чтобы подтвердить детали.",
      errorText: "Произошла ошибка отправки. Пожалуйста, напишите нам напрямую в Telegram или позвоните.",
      telegramDirect: "Написать напрямую в Telegram",
      orCall: "Или позвоните нам:",
      close: "Закрыть"
    },
    footer: {
      slogan: "Wild Nest — Не просто палатка, а священная обитель воспоминаний.",
      rights: "Все права защищены.",
      pages: "Страницы",
      contact: "Контакты",
      telegramChannel: "Наш Telegram канал"
    }
  },
  ENG: {
    nav: {
      home: "Home",
      about: "About Us",
      packages: "Packages",
      results: "Gallery",
      reviews: "Testimonials",
      bookNow: "Book Spot"
    },
    hero: {
      tagline: "Unforgettable getaway in the embrace of nature!",
      title: "Not just a tent — a sanctuary of precious memories.",
      subtitle: "Just pack your bag — we prepare everything else for you ♡",
      rentPriceLabel: "DAILY RENTAL PRICE FROM",
      rentPrice: "500,000 UZS",
      familyDiscountTag: "10% DISCOUNT FOR FAMILY BOOKINGS & VACATIONS",
      includedCountLabel: "FULL INCLUSIONS:",
      includedTitle: "WHAT IS INCLUDED IN THE FULL SET",
      includedItems: {
        tent: "Grand Aesthetic Bell Tent",
        tentDesc: "Waterproof, spacious design, beautifully lit and properly ventilated.",
        mattress: "Cloud-Soft Mattress",
        mattressDesc: "Complete with plush warming sheets, quilts, and fluffy pillows.",
        projector: "Cinema Projector",
        projectorDesc: "Your favorite movies under a blanket of cosmic stars right in the wilderness.",
        speaker: "Bluetooth Speaker",
        speakerDesc: "Crisp sounding melodies for ambient soundscapes with deep baselines.",
        coffee: "Brew Coffee Kit",
        coffeeDesc: "Specialty drip coffee set for refreshing, crisp mountain mornings.",
        candles: "Candles & LED lights",
        candlesDesc: "A warm flickering romantic glow with aesthetic LED fairy string lights."
      },
      underBadge: "Everything is fully delivered and assembled!"
    },
    about: {
      badge: "OUR PHILOSOPHY",
      title: "Build unforgettable memories with us!",
      subtitle: "Wild Nest blends raw nature with luxury comfort to script your ultimate escapade.",
      description: "Forget the tiresome manual tent building, gathering moist logs and sleeping on shivering damp earth. We welcome you to an elevated realm of aesthetic glamping styled on majestic peaks and quiet shores with curated setups.",
      experienceTitle: "Build unforgettable memories with us:",
      exp1_title: "Serenity with your Loved One",
      exp1_desc: "A soft flickering candlelit escapade far away from the chaotic noise of society.",
      exp2_title: "Laughter in the Bonfire circle",
      exp2_desc: "Acoustic strings, crackling high flames, and unbridled true memories with friends.",
      exp3_title: "New Places – Untold Stories",
      exp3_desc: "Every remote wilderness location is a poetic chapter waiting to write itself.",
      exp4_title: "Cinematic Theater Under Stars",
      exp4_desc: "Cuddled up in warm blankets, hot cocoa, and your favorite films glowing in the wild.",
      exp5_title: "Morning Brew & Golden Mist",
      exp5_desc: "Waking up to absolute silence, crisp air, and rich aroma of slow-drip gourmet coffee.",
      quote: "Every escape is a memory, every memory is a life well-lived. ♡"
    },
    features: {
      guarantee: "QUALITY GUARANTEE",
      guaranteeDesc: "Every single piece of equipment is thoroughly sanitized and vacuumed before delivery.",
      delivery: "SWIFT DELIVERY",
      deliveryDesc: "We quickly transport the complete luxury glamping set directly to your chosen spot.",
      setup: "EXPERT ASSEMBLY",
      setupDesc: "Our setup crew handles all tent tensioning and technical audio-projector connections.",
      clean: "HASSLE-FREE CLEANUP",
      cleanDesc: "Once your getaway concludes, we clean, pack, and retrieve everything seamlessly.",
      discount: "EXCLUSIVE DISCOUNTS",
      discountDesc: "Special group coupons and loving adjustments for couples and toddlers."
    },
    packages: {
      badge: "OUR PLANS",
      title: "Curate your preferred comfort",
      subtitle: "Three bespoke experiences designed to harmonize with your taste for escape.",
      currency: "UZS",
      perDay: "day",
      bookButton: "Secure Booking",
      comfortLevel: "Comfort",
      tiers: {
        basic: {
          name: "Chilla Nest (Basic)",
          desc: "An elegant minimal package for an authentic retreat. Perfect lightweight experience.",
          features: [
            "Suites water-repellent bell tent (3x3m)",
            "Comfortable kamping mattresses and sheets",
            "Ambient LED safety lanterns",
            "Classic wooden portable set of table and seats",
            "Compact firewood and fire starter toolkit",
            "Elegant natural styling accents"
          ]
        },
        comfort: {
          name: "Sokinlik Nest (Comfort)",
          desc: "Our best-selling setup. Merges exquisite cozy aesthetics with cinema and coffee in the wild.",
          features: [
            "Spacious luxury aesthetic canvas bell tent (4x4m)",
            "Orthopedic foam bed padding, warming quilts & heavy blankets",
            "HD Cinema Projector and 80\" roll-up projector screen",
            "Premium Bluetooth audio speaker with rich sound signature",
            "Curated drip coffee kettle set & soothing aromatherapy wax candles",
            "Generous stack of selected dry logs and quality coals",
            "Two premium relaxed canvas director chairs",
            "String style high-density fairy lighting and warm deck decor"
          ]
        },
        luxury: {
          name: "Wild Horizon (VIP/Luxury)",
          desc: "A fully guided VIP glamping escapade. Ultimate luxury amidst pure nature with zero compromises.",
          features: [
            "Super grand elite safari structure (5x5m)",
            "Real structural hotel queen-bed, pure linen, fine feathers",
            "4K Ultra HD smart theater setup with Apple TV integration",
            "JBL Premium surround sound layout",
            "Elite slow-drip coffee ensemble and customized welcome snacks (fruits & pastries)",
            "Heavy duty gourmet grill-station & charcoal stove with full tableware",
            "Free priority delivery, custom assembly, and tidy-up pickup",
            "Eligible for our premium 10% discount voucher",
            "Photogenic floral photo-zone decoration for aesthetic shoots"
          ]
        }
      }
    },
    results: {
      badge: "MOMENTS",
      title: "Memories created by our guests",
      subtitle: "Real photographs taken from mountains, lakeside woods, and starry nights.",
      filterAll: "All Memories",
      filterCouple: "Couples & Romance",
      filterFriends: "With Closest Friends",
      filterAdventure: "Raw Wild Journeys"
    },
    reviews: {
      badge: "GUEST REVIEWS",
      title: "What our wild guests say",
      subtitle: "Authentic expressions of wonder, serene thoughts, and joyous escapes."
    },
    form: {
      title: "Secure your Wilderness Escape",
      subtitle: "Fill-in details and our adventure coordinator will configure your elite nest.",
      firstName: "Full Name",
      lastName: "Province / Region",
      phone: "Phone number",
      packageSelect: "Choose Comfort Tier",
      submit: "Initiate Adventure",
      submitting: "Transmitting...",
      successTitle: "Splendid Choice! 🎉",
      successText: "Your booking request is received. A Wild Nest guide will dial you back momentarily to map out your getaway.",
      errorText: "Failed to dispatch booking. Please contact us instantly via direct phone call or Telegram.",
      telegramDirect: "DM us on Telegram",
      orCall: "Or direct dial right now:",
      close: "Close"
    },
    footer: {
      slogan: "Wild Nest — Not a tent, but a sanctuary of precious memories.",
      rights: "All rights reserved.",
      pages: "Pages",
      contact: "Contact Details",
      telegramChannel: "Our Telegram Channel"
    }
  }
};
