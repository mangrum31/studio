
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  topic: string;
}

interface QuizData {
  en: QuizQuestion[];
  bn: QuizQuestion[];
}

export const quizQuestions: QuizData = {
  en: [
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
      id: 3,
      question: "Which city is the capital of Bangladesh?",
      options: ["Chittagong", "Sylhet", "Khulna", "Dhaka"],
      correctAnswer: "Dhaka",
      topic: "Geography",
    },
    {
      id: 4,
      question: "What are the primary colors of the Bangladeshi flag?",
      options: ["Blue and White", "Green and Yellow", "Red and Green", "Black and Red"],
      correctAnswer: "Red and Green",
      topic: "National Symbols",
    },
    {
      id: 5,
      question: "What is the name of the longest sea beach in the world, located in Bangladesh?",
      options: ["Cox's Bazar", "Kuakata", "Patenga", "Inani Beach"],
      correctAnswer: "Cox's Bazar",
      topic: "Geography",
    },
    {
      id: 6,
      question: "Who is the national poet of Bangladesh?",
      options: ["Rabindranath Tagore", "Jasimuddin", "Kazi Nazrul Islam", "Sukumar Ray"],
      correctAnswer: "Kazi Nazrul Islam",
      topic: "Literature & Arts"
    },
    {
      id: 7,
      question: "What is the main river of Bangladesh?",
      options: ["Meghna", "Padma", "Jamuna", "Brahmaputra"],
      correctAnswer: "Padma",
      topic: "Geography"
    },
    {
      id: 8,
      question: "Which is the national fruit of Bangladesh?",
      options: ["Mango", "Jackfruit", "Lichi", "Banana"],
      correctAnswer: "Jackfruit",
      topic: "National Symbols"
    },
  ],
  bn: [
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
      id: 3,
      question: "বাংলাদেশের রাজধানী কোন শহর?",
      options: ["চট্টগ্রাম", "সিলেট", "খুলনা", "ঢাকা"],
      correctAnswer: "ঢাকা",
      topic: "ভূগোল",
    },
    {
      id: 4,
      question: "বাংলাদেশী পতাকার প্রধান রং কি কি?",
      options: ["নীল এবং সাদা", "সবুজ এবং হলুদ", "লাল এবং সবুজ", "কালো এবং লাল"],
      correctAnswer: "লাল এবং সবুজ",
      topic: "জাতীয় প্রতীক",
    },
    {
      id: 5,
      question: "বাংলাদেশে অবস্থিত বিশ্বের দীর্ঘতম সমুদ্র সৈকতের নাম কী?",
      options: ["কক্সবাজার", "কুয়াকাটা", "পতেঙ্গা", "ইনানী বিচ"],
      correctAnswer: "কক্সবাজার",
      topic: "ভূগোল",
    },
    {
        id: 6,
        question: "বাংলাদেশের জাতীয় কবি কে?",
        options: ["রবীন্দ্রনাথ ঠাকুর", "জসীমউদ্দিন", "কাজী নজরুল ইসলাম", "সুকুমার রায়"],
        correctAnswer: "কাজী নজরুল ইসলাম",
        topic: "সাহিত্য ও শিল্প"
    },
    {
        id: 7,
        question: "বাংলাদেশের প্রধান নদী কোনটি?",
        options: ["মেঘনা", "পদ্মা", "যমুনা", "ব্রহ্মপুত্র"],
        correctAnswer: "পদ্মা",
        topic: "ভূগোল"
    },
    {
        id: 8,
        question: "বাংলাদেশের জাতীয় ফল কোনটি?",
        options: ["আম", "কাঁঠাল", "লিচু", "কলা"],
        correctAnswer: "কাঁঠাল",
        topic: "জাতীয় প্রতীক"
    }
  ],
};
