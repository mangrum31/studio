
export interface QuizOption {
  text: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  topic: string;
}

interface QuizData {
  en: Record<string, QuizQuestion[]>;
  bn: Record<string, QuizQuestion[]>;
}

export const quizTopics = {
  alphabet: {
    en: "Alphabet",
    bn: "বর্ণমালা",
  },
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
    alphabet: [
      {
        id: 20,
        question: "What does this picture start with?",
        options: [
          { text: "A", imageUrl: "https://picsum.photos/seed/apple/200/200", imageHint: "apple" },
          { text: "B" },
          { text: "C" },
          { text: "D" },
        ],
        correctAnswer: "A",
        topic: "Alphabet",
      },
      {
        id: 21,
        question: "What does this picture start with?",
        options: [
          { text: "A" },
          { text: "B", imageUrl: "https://picsum.photos/seed/ball/200/200", imageHint: "ball" },
          { text: "C" },
          { text: "D" },
        ],
        correctAnswer: "B",
        topic: "Alphabet",
      },
      {
        id: 22,
        question: "What does this picture start with?",
        options: [
          { text: "A" },
          { text: "B" },
          { text: "C", imageUrl: "https://picsum.photos/seed/cat/200/200", imageHint: "cat" },
          { text: "D" },
        ],
        correctAnswer: "C",
        topic: "Alphabet",
      },
    ],
    national_symbols: [
      {
        id: 1,
        question: "What is the national flower of Bangladesh?",
        options: [{text: "Rose"}, {text: "Water Lily (Shapla)"}, {text: "Marigold"}, {text: "Tulip"}],
        correctAnswer: "Water Lily (Shapla)",
        topic: "National Symbols",
      },
      {
        id: 2,
        question: "What is the national animal of Bangladesh?",
        options: [{text: "Elephant"}, {text: "Lion"}, {text: "Royal Bengal Tiger"}, {text: "Deer"}],
        correctAnswer: "Royal Bengal Tiger",
        topic: "National Symbols",
      },
      {
        id: 4,
        question: "What are the primary colors of the Bangladeshi flag?",
        options: [{text: "Blue and White"}, {text: "Green and Yellow"}, {text: "Red and Green"}, {text: "Black and Red"}],
        correctAnswer: "Red and Green",
        topic: "National Symbols",
      },
      {
        id: 8,
        question: "Which is the national fruit of Bangladesh?",
        options: [{text: "Mango"}, {text: "Jackfruit"}, {text: "Lichi"}, {text: "Banana"}],
        correctAnswer: "Jackfruit",
        topic: "National Symbols"
      },
      {
        id: 11,
        question: "What is the national tree of Bangladesh?",
        options: [{text: "Banyan Tree"}, {text: "Mango Tree"}, {text: "Jackfruit Tree"}, {text: "Neem Tree"}],
        correctAnswer: "Mango Tree",
        topic: "National Symbols"
      },
      {
        id: 12,
        question: "What is the national bird of Bangladesh?",
        options: [{text: "Crow"}, {text: "Dove"}, {text: "Magpie-robin (Doyel)"}, {text: "Parrot"}],
        correctAnswer: "Magpie-robin (Doyel)",
        topic: "National Symbols"
      }
    ],
    geography: [
      {
        id: 3,
        question: "Which city is the capital of Bangladesh?",
        options: [{text: "Chittagong"}, {text: "Sylhet"}, {text: "Khulna"}, {text: "Dhaka"}],
        correctAnswer: "Dhaka",
        topic: "Geography",
      },
      {
        id: 5,
        question: "What is the name of the longest sea beach in the world, located in Bangladesh?",
        options: [{text: "Cox's Bazar"}, {text: "Kuakata"}, {text: "Patenga"}, {text: "Inani Beach"}],
        correctAnswer: "Cox's Bazar",
        topic: "Geography",
      },
      {
        id: 7,
        question: "What is the largest mangrove forest in the world, located in Bangladesh?",
        options: [{text: "Amazon Rainforest"}, {text: "Sundarbans"}, {text: "Bhawal National Park"}, {text: "Lawachara National Park"}],
        correctAnswer: "Sundarbans",
        topic: "Geography"
      },
      {
        id: 13,
        question: "Which river is known as the 'Jamuna' in Bangladesh?",
        options: [{text: "Ganges"}, {text: "Padma"}, {text: "Brahmaputra"}, {text: "Meghna"}],
        correctAnswer: "Brahmaputra",
        topic: "Geography"
      },
    ],
    literature_arts: [
      {
        id: 6,
        question: "Who is the national poet of Bangladesh?",
        options: [{text: "Rabindranath Tagore"}, {text: "Jasimuddin"}, {text: "Kazi Nazrul Islam"}, {text: "Sukumar Ray"}],
        correctAnswer: "Kazi Nazrul Islam",
        topic: "Literature & Arts"
      },
      {
        id: 14,
        question: "Who wrote the national anthem of Bangladesh, 'Amar Shonar Bangla'?",
        options: [{text: "Kazi Nazrul Islam"}, {text: "Jasimuddin"}, {text: "Rabindranath Tagore"}, {text: "Farrukh Ahmad"}],
        correctAnswer: "Rabindranath Tagore",
        topic: "Literature & Arts"
      },
    ],
    history: [
      {
        id: 9,
        question: "When did Bangladesh gain independence?",
        options: [{text: "1952"}, {text: "1965"}, {text: "1971"}, {text: "1980"}],
        correctAnswer: "1971",
        topic: "History"
      },
      {
        id: 10,
        question: "What is the historical name for the 'Language Movement Day'?",
        options: [{text: "Independence Day"}, {text: "Ekushey February"}, {text: "Victory Day"}, {text: "Pohela Boishakh"}],
        correctAnswer: "Ekushey February",
        topic: "History"
      },
      {
        id: 15,
        question: "The liberation war of Bangladesh lasted for how many months?",
        options: [{text: "6 months"}, {text: "9 months"}, {text: "1 year"}, {text: "2 years"}],
        correctAnswer: "9 months",
        topic: "History"
      },
    ],
    culture_lifestyle: [
      {
        id: 16,
        question: "What is the main festival celebrated by Bengalis regardless of religion?",
        options: [{text: "Eid"}, {text: "Durga Puja"}, {text: "Pohela Boishakh"}, {text: "Christmas"}],
        correctAnswer: "Pohela Boishakh",
        topic: "Culture & Lifestyle"
      },
      {
        id: 17,
        question: "What is a 'Rickshaw' in Bangladesh?",
        options: [{text: "A type of food"}, {text: "A traditional dress"}, {text: "A three-wheeled passenger cart"}, {text: "A musical instrument"}],
        correctAnswer: "A three-wheeled passenger cart",
        topic: "Culture & Lifestyle"
      },
    ],
    sports: [
      {
        id: 18,
        question: "What is the national sport of Bangladesh?",
        options: [{text: "Cricket"}, {text: "Football"}, {text: "Kabaddi"}, {text: "Hockey"}],
        correctAnswer: "Kabaddi",
        topic: "Sports"
      },
      {
        id: 19,
        question: "Which cricketer is known as the 'Tiger of Bengal'?",
        options: [{text: "Shakib Al Hasan"}, {text: "Mashrafe Mortaza"}, {text: "Tamim Iqbal"}, {text: "Mushfiqur Rahim"}],
        correctAnswer: "Mashrafe Mortaza",
        topic: "Sports"
      }
    ]
  },
  bn: {
    alphabet: [
      {
        id: 20,
        question: "এই ছবিটি কি দিয়ে শুরু হয়?",
        options: [
          { text: "A", imageUrl: "https://picsum.photos/seed/apple/200/200", imageHint: "apple" },
          { text: "B" },
          { text: "C" },
          { text: "D" },
        ],
        correctAnswer: "A",
        topic: "বর্ণমালা",
      },
      {
        id: 21,
        question: "এই ছবিটি কি দিয়ে শুরু হয়?",
        options: [
          { text: "A" },
          { text: "B", imageUrl: "https://picsum.photos/seed/ball/200/200", imageHint: "ball" },
          { text: "C" },
          { text: "D" },
        ],
        correctAnswer: "B",
        topic: "বর্ণমালা",
      },
      {
        id: 22,
        question: "এই ছবিটি কি দিয়ে শুরু হয়?",
        options: [
          { text: "A" },
          { text: "B" },
          { text: "C", imageUrl: "https://picsum.photos/seed/cat/200/200", imageHint: "cat" },
          { text: "D" },
        ],
        correctAnswer: "C",
        topic: "বর্ণমালা",
      },
    ],
    national_symbols: [
      {
        id: 1,
        question: "বাংলাদেশের জাতীয় ফুল কী?",
        options: [{text: "গোলাপ"}, {text: "শাপলা"}, {text: "গাঁদা"}, {text: "টিউলিপ"}],
        correctAnswer: "শাপলা",
        topic: "জাতীয় প্রতীক",
      },
      {
        id: 2,
        question: "বাংলাদেশের জাতীয় পশু কী?",
        options: [{text: "হাতি"}, {text: "সিংহ"}, {text: "রয়েল বেঙ্গল টাইগার"}, {text: "হরিণ"}],
        correctAnswer: "রয়েল বেঙ্গল টাইগার",
        topic: "জাতীয় প্রতীক",
      },
      {
        id: 4,
        question: "বাংলাদেশী পতাকার প্রধান রং কি কি?",
        options: [{text: "নীল এবং সাদা"}, {text: "সবুজ এবং হলুদ"}, {text: "লাল এবং সবুজ"}, {text: "কালো এবং লাল"}],
        correctAnswer: "লাল এবং সবুজ",
        topic: "জাতীয় প্রতীক",
      },
      {
        id: 8,
        question: "বাংলাদেশের জাতীয় ফল কোনটি?",
        options: [{text: "আম"}, {text: "কাঁঠাল"}, {text: "লিচু"}, {text: "কলা"}],
        correctAnswer: "কাঁঠাল",
        topic: "জাতীয় প্রতীক"
      },
      {
        id: 11,
        question: "বাংলাদেশের জাতীয় বৃক্ষ কোনটি?",
        options: [{text: "বট গাছ"}, {text: "আম গাছ"}, {text: "কাঁঠাল গাছ"}, {text: "নিম গাছ"}],
        correctAnswer: "আম গাছ",
        topic: "জাতীয় প্রতীক"
      },
      {
        id: 12,
        question: "বাংলাদেশের জাতীয় পাখি কোনটি?",
        options: [{text: "কাক"}, {text: "কবুতর"}, {text: "দোয়েল"}, {text: "টিয়া"}],
        correctAnswer: "দোয়েল",
        topic: "জাতীয় প্রতীক"
      }
    ],
    geography: [
      {
        id: 3,
        question: "বাংলাদেশের রাজধানী কোন শহর?",
        options: [{text: "চট্টগ্রাম"}, {text: "সিলেট"}, {text: "খুলনা"}, {text: "ঢাকা"}],
        correctAnswer: "ঢাকা",
        topic: "ভূগোল",
      },
      {
        id: 5,
        question: "বাংলাদেশে অবস্থিত বিশ্বের দীর্ঘতম সমুদ্র সৈকতের নাম কী?",
        options: [{text: "কক্সবাজার"}, {text: "কুয়াকাটা"}, {text: "পতেঙ্গা"}, {text: "ইনানী বিচ"}],
        correctAnswer: "কক্সবাজার",
        topic: "ভূগোল",
      },
      {
        id: 7,
        question: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন কোনটি, যা বাংলাদেশে অবস্থিত?",
        options: [{text: "আমাজন রেইনফরেস্ট"}, {text: "সুন্দরবন"}, {text: "ভাওয়াল জাতীয় উদ্যান"}, {text: "লাউয়াছড়া জাতীয় উদ্যান"}],
        correctAnswer: "সুন্দরবন",
        topic: "ভূগোল"
      },
      {
        id: 13,
        question: "বাংলাদেশে কোন নদী 'যমুনা' নামে পরিচিত?",
        options: [{text: "গঙ্গা"}, {text: "পদ্মা"}, {text: "ব্রহ্মপুত্র"}, {text: "মেঘনা"}],
        correctAnswer: "ব্রহ্মপুত্র",
        topic: "ভূগোল"
      },
    ],
    literature_arts: [
      {
          id: 6,
          question: "বাংলাদেশের জাতীয় কবি কে?",
          options: [{text: "রবীন্দ্রনাথ ঠাকুর"}, {text: "জসীমউদ্দিন"}, {text: "কাজী নজরুল ইসলাম"}, {text: "সুকুমার রায়"}],
          correctAnswer: "কাজী নজরুল ইসলাম",
          topic: "সাহিত্য ও শিল্প"
      },
      {
        id: 14,
        question: "বাংলাদেশের জাতীয় সঙ্গীত 'আমার সোনার বাংলা' কে লিখেছেন?",
        options: [{text: "কাজী নজরুল ইসলাম"}, {text: "জসীমউদ্দিন"}, {text: "রবীন্দ্রনাথ ঠাকুর"}, {text: "ফররুখ আহমদ"}],
        correctAnswer: "রবীন্দ্রনাথ ঠাকুর",
        topic: "সাহিত্য ও শিল্প"
      },
    ],
    history: [
      {
        id: 9,
        question: "বাংলাদেশ কবে স্বাধীনতা লাভ করে?",
        options: [{text: "১৯৫২"}, {text: "১৯৬৫"}, {text: "১৯৭১"}, {text: "১৯৮০"}],
        correctAnswer: "১৯৭১",
        topic: "ইতিহাস"
      },
      {
        id: 10,
        question: "'ভাষা আন্দোলন দিবস' এর ঐতিহাসিক নাম কি?",
        options: [{text: "স্বাধীনতা দিবস"}, {text: "একুশে ফেব্রুয়ারি"}, {text: "বিজয় দিবস"}, {text: "পহেলা বৈশাখ"}],
        correctAnswer: "একুশে ফেব্রুয়ারি",
        topic: "ইতিহাস"
      },
      {
        id: 15,
        question: "বাংলাদেশের মুক্তিযুদ্ধ কত মাস স্থায়ী হয়েছিল?",
        options: [{text: "৬ মাস"}, {text: "৯ মাস"}, {text: "১ বছর"}, {text: "২ বছর"}],
        correctAnswer: "৯ মাস",
        topic: "ইতিহাস"
      },
    ],
    culture_lifestyle: [
      {
        id: 16,
        question: "ধর্ম-বর্ণ নির্বিশেষে বাঙালিরা কোন প্রধান উৎসব পালন করে?",
        options: [{text: "ঈদ"}, {text: "দুর্গাপূজা"}, {text: "পহেলা বৈশাখ"}, {text: "ক্রিসমাস"}],
        correctAnswer: "পহেলা বৈশাখ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 17,
        question: "বাংলাদেশে 'রিকশা' কী?",
        options: [{text: "এক ধরনের খাবার"}, {text: "একটি ঐতিহ্যবাহী পোশাক"}, {text: "একটি তিন চাকার যাত্রীবাহী গাড়ি"}, {text: "একটি বাদ্যযন্ত্র"}],
        correctAnswer: "একটি তিন চাকার যাত্রীবাহী গাড়ি",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
    ],
    sports: [
      {
        id: 18,
        question: "বাংলাদেশের জাতীয় খেলা কোনটি?",
        options: [{text: "ক্রিকেট"}, {text: "ফুটবল"}, {text: "কাবাডি"}, {text: "হকি"}],
        correctAnswer: "কাবাডি",
        topic: "খেলাধুলা"
      },
      {
        id: 19,
        question: "কোন ক্রিকেটার 'বাংলার টাইগার' নামে পরিচিত?",
        options: [{text: "সাকিব আল হাসান"}, {text: "মাশরাফি মুর্তজা"}, {text: "তামিম ইকবাল"}, {text: "মুশফিকুর রহিম"}],
        correctAnswer: "মাশরাফি মুর্তজা",
        topic: "খেলাধুলা"
      }
    ]
  },
};
