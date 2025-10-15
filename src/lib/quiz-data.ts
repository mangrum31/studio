
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  topic: string;
}

interface QuizData {
  en: Record<string, QuizQuestion[]>;
  bn: Record<string, QuizQuestion[]>;
}

export const quizTopics = {
  national_symbols: {
    en: "National Symbols",
    bn: "জাতীয় প্রতীক",
  },
  geography: {
    en: "Geography",
    bn: "ভূগোল",
  },
  literature_arts: {
    en: "Literature & Arts",
    bn: "সাহিত্য ও শিল্প",
  },
  history: {
    en: "History",
    bn: "ইতিহাস",
  },
  culture_lifestyle: {
    en: "Culture & Lifestyle",
    bn: "সংস্কৃতি ও জীবনধারা",
  },
  sports: {
    en: "Sports",
    bn: "খেলাধুলা",
  },
};

export const quizQuestions: QuizData = {
  en: {
    national_symbols: [
      {
        id: 1,
        question: "What is the national flower of Bangladesh?",
        options: ["Rose", "Water Lily (Shapla)", "Marigold", "Tulip"],
        correctAnswer: "Water Lily (Shapla)",
        topic: "National Symbols",
      },
      {
        id: 2,
        question: "What is the national animal of Bangladesh?",
        options: ["Elephant", "Lion", "Royal Bengal Tiger", "Deer"],
        correctAnswer: "Royal Bengal Tiger",
        topic: "National Symbols",
      },
      {
        id: 4,
        question: "What are the primary colors of the Bangladeshi flag?",
        options: ["Blue and White", "Green and Yellow", "Red and Green", "Black and Red"],
        correctAnswer: "Red and Green",
        topic: "National Symbols",
      },
      {
        id: 8,
        question: "Which is the national fruit of Bangladesh?",
        options: ["Mango", "Jackfruit", "Lichi", "Banana"],
        correctAnswer: "Jackfruit",
        topic: "National Symbols"
      },
      {
        id: 11,
        question: "What is the national tree of Bangladesh?",
        options: ["Banyan Tree", "Mango Tree", "Jackfruit Tree", "Neem Tree"],
        correctAnswer: "Mango Tree",
        topic: "National Symbols"
      },
      {
        id: 12,
        question: "What is the national bird of Bangladesh?",
        options: ["Crow", "Dove", "Magpie-robin (Doyel)", "Parrot"],
        correctAnswer: "Magpie-robin (Doyel)",
        topic: "National Symbols"
      }
    ],
    geography: [
      {
        id: 3,
        question: "Which city is the capital of Bangladesh?",
        options: ["Chittagong", "Sylhet", "Khulna", "Dhaka"],
        correctAnswer: "Dhaka",
        topic: "Geography",
      },
      {
        id: 5,
        question: "What is the name of the longest sea beach in the world, located in Bangladesh?",
        options: ["Cox's Bazar", "Kuakata", "Patenga", "Inani Beach"],
        correctAnswer: "Cox's Bazar",
        topic: "Geography",
      },
      {
        id: 7,
        question: "What is the largest mangrove forest in the world, located in Bangladesh?",
        options: ["Amazon Rainforest", "Sundarbans", "Bhawal National Park", "Lawachara National Park"],
        correctAnswer: "Sundarbans",
        topic: "Geography"
      },
      {
        id: 13,
        question: "Which river is known as the 'Jamuna' in Bangladesh?",
        options: ["Ganges", "Padma", "Brahmaputra", "Meghna"],
        correctAnswer: "Brahmaputra",
        topic: "Geography"
      },
    ],
    literature_arts: [
      {
        id: 6,
        question: "Who is the national poet of Bangladesh?",
        options: ["Rabindranath Tagore", "Jasimuddin", "Kazi Nazrul Islam", "Sukumar Ray"],
        correctAnswer: "Kazi Nazrul Islam",
        topic: "Literature & Arts"
      },
      {
        id: 14,
        question: "Who wrote the national anthem of Bangladesh, 'Amar Shonar Bangla'?",
        options: ["Kazi Nazrul Islam", "Jasimuddin", "Rabindranath Tagore", "Farrukh Ahmad"],
        correctAnswer: "Rabindranath Tagore",
        topic: "Literature & Arts"
      },
    ],
    history: [
      {
        id: 9,
        question: "When did Bangladesh gain independence?",
        options: ["1952", "1965", "1971", "1980"],
        correctAnswer: "1971",
        topic: "History"
      },
      {
        id: 10,
        question: "What is the historical name for the 'Language Movement Day'?",
        options: ["Independence Day", "Ekushey February", "Victory Day", "Pohela Boishakh"],
        correctAnswer: "Ekushey February",
        topic: "History"
      },
      {
        id: 15,
        question: "The liberation war of Bangladesh lasted for how many months?",
        options: ["6 months", "9 months", "1 year", "2 years"],
        correctAnswer: "9 months",
        topic: "History"
      },
    ],
    culture_lifestyle: [
      {
        id: 16,
        question: "What is the main festival celebrated by Bengalis regardless of religion?",
        options: ["Eid", "Durga Puja", "Pohela Boishakh", "Christmas"],
        correctAnswer: "Pohela Boishakh",
        topic: "Culture & Lifestyle"
      },
      {
        id: 17,
        question: "What is a 'Rickshaw' in Bangladesh?",
        options: ["A type of food", "A traditional dress", "A three-wheeled passenger cart", "A musical instrument"],
        correctAnswer: "A three-wheeled passenger cart",
        topic: "Culture & Lifestyle"
      },
    ],
    sports: [
      {
        id: 18,
        question: "What is the national sport of Bangladesh?",
        options: ["Cricket", "Football", "Kabaddi", "Hockey"],
        correctAnswer: "Kabaddi",
        topic: "Sports"
      },
      {
        id: 19,
        question: "Which cricketer is known as the 'Tiger of Bengal'?",
        options: ["Shakib Al Hasan", "Mashrafe Mortaza", "Tamim Iqbal", "Mushfiqur Rahim"],
        correctAnswer: "Mashrafe Mortaza",
        topic: "Sports"
      }
    ]
  },
  bn: {
    national_symbols: [
      {
        id: 1,
        question: "বাংলাদেশের জাতীয় ফুল কী?",
        options: ["গোলাপ", "শাপলা", "গাঁদা", "টিউলিপ"],
        correctAnswer: "শাপলা",
        topic: "জাতীয় প্রতীক",
      },
      {
        id: 2,
        question: "বাংলাদেশের জাতীয় পশু কী?",
        options: ["হাতি", "সিংহ", "রয়েল বেঙ্গল টাইগার", "হরিণ"],
        correctAnswer: "রয়েল বেঙ্গল টাইগার",
        topic: "জাতীয় প্রতীক",
      },
      {
        id: 4,
        question: "বাংলাদেশী পতাকার প্রধান রং কি কি?",
        options: ["নীল এবং সাদা", "সবুজ এবং হলুদ", "লাল এবং সবুজ", "কালো এবং লাল"],
        correctAnswer: "লাল এবং সবুজ",
        topic: "জাতীয় প্রতীক",
      },
      {
        id: 8,
        question: "বাংলাদেশের জাতীয় ফল কোনটি?",
        options: ["আম", "কাঁঠাল", "লিচু", "কলা"],
        correctAnswer: "কাঁঠাল",
        topic: "জাতীয় প্রতীক"
      },
      {
        id: 11,
        question: "বাংলাদেশের জাতীয় বৃক্ষ কোনটি?",
        options: ["বট গাছ", "আম গাছ", "কাঁঠাল গাছ", "নিম গাছ"],
        correctAnswer: "আম গাছ",
        topic: "জাতীয় প্রতীক"
      },
      {
        id: 12,
        question: "বাংলাদেশের জাতীয় পাখি কোনটি?",
        options: ["কাক", "কবুতর", "দোয়েল", "টিয়া"],
        correctAnswer: "দোয়েল",
        topic: "জাতীয় প্রতীক"
      }
    ],
    geography: [
      {
        id: 3,
        question: "বাংলাদেশের রাজধানী কোন শহর?",
        options: ["চট্টগ্রাম", "সিলেট", "খুলনা", "ঢাকা"],
        correctAnswer: "ঢাকা",
        topic: "ভূগোল",
      },
      {
        id: 5,
        question: "বাংলাদেশে অবস্থিত বিশ্বের দীর্ঘতম সমুদ্র সৈকতের নাম কী?",
        options: ["কক্সবাজার", "কুয়াকাটা", "পতেঙ্গা", "ইনানী বিচ"],
        correctAnswer: "কক্সবাজার",
        topic: "ভূগোল",
      },
      {
        id: 7,
        question: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন কোনটি, যা বাংলাদেশে অবস্থিত?",
        options: ["আমাজন রেইনফরেস্ট", "সুন্দরবন", "ভাওয়াল জাতীয় উদ্যান", "লাউয়াছড়া জাতীয় উদ্যান"],
        correctAnswer: "সুন্দরবন",
        topic: "ভূগোল"
      },
      {
        id: 13,
        question: "বাংলাদেশে কোন নদী 'যমুনা' নামে পরিচিত?",
        options: ["গঙ্গা", "পদ্মা", "ব্রহ্মপুত্র", "মেঘনা"],
        correctAnswer: "ব্রহ্মপুত্র",
        topic: "ভূগোল"
      },
    ],
    literature_arts: [
      {
          id: 6,
          question: "বাংলাদেশের জাতীয় কবি কে?",
          options: ["রবীন্দ্রনাথ ঠাকুর", "জসীমউদ্দিন", "কাজী নজরুল ইসলাম", "সুকুমার রায়"],
          correctAnswer: "কাজী নজরুল ইসলাম",
          topic: "সাহিত্য ও শিল্প"
      },
      {
        id: 14,
        question: "বাংলাদেশের জাতীয় সঙ্গীত 'আমার সোনার বাংলা' কে লিখেছেন?",
        options: ["কাজী নজরুল ইসলাম", "জসীমউদ্দিন", "রবীন্দ্রনাথ ঠাকুর", "ফররুখ আহমদ"],
        correctAnswer: "রবীন্দ্রনাথ ঠাকুর",
        topic: "সাহিত্য ও শিল্প"
      },
    ],
    history: [
      {
        id: 9,
        question: "বাংলাদেশ কবে স্বাধীনতা লাভ করে?",
        options: ["১৯৫২", "১৯৬৫", "১৯৭১", "১৯৮০"],
        correctAnswer: "১৯৭১",
        topic: "ইতিহাস"
      },
      {
        id: 10,
        question: "'ভাষা আন্দোলন দিবস' এর ঐতিহাসিক নাম কি?",
        options: ["স্বাধীনতা দিবস", "একুশে ফেব্রুয়ারি", "বিজয় দিবস", "পহেলা বৈশাখ"],
        correctAnswer: "একুশে ফেব্রুয়ারি",
        topic: "ইতিহাস"
      },
      {
        id: 15,
        question: "বাংলাদেশের মুক্তিযুদ্ধ কত মাস স্থায়ী হয়েছিল?",
        options: ["৬ মাস", "৯ মাস", "১ বছর", "২ বছর"],
        correctAnswer: "৯ মাস",
        topic: "ইতিহাস"
      },
    ],
    culture_lifestyle: [
      {
        id: 16,
        question: "ধর্ম-বর্ণ নির্বিশেষে বাঙালিরা কোন প্রধান উৎসব পালন করে?",
        options: ["ঈদ", "দুর্গাপূজা", "পহেলা বৈশাখ", "ক্রিসমাস"],
        correctAnswer: "পহেলা বৈশাখ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 17,
        question: "বাংলাদেশে 'রিকশা' কী?",
        options: ["এক ধরনের খাবার", "একটি ঐতিহ্যবাহী পোশাক", "একটি তিন চাকার যাত্রীবাহী গাড়ি", "একটি বাদ্যযন্ত্র"],
        correctAnswer: "একটি তিন চাকার যাত্রীবাহী গাড়ি",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
    ],
    sports: [
      {
        id: 18,
        question: "বাংলাদেশের জাতীয় খেলা কোনটি?",
        options: ["ক্রিকেট", "ফুটবল", "কাবাডি", "হকি"],
        correctAnswer: "কাবাডি",
        topic: "খেলাধুলা"
      },
      {
        id: 19,
        question: "কোন ক্রিকেটার 'বাংলার টাইগার' নামে পরিচিত?",
        options: ["সাকিব আল হাসান", "মাশরাফি মুর্তজা", "তামিম ইকবাল", "মুশফিকুর রহিম"],
        correctAnswer: "মাশরাফি মুর্তজা",
        topic: "খেলাধুলা"
      }
    ]
  },
};
