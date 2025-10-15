
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
      },
      {
        id: 23,
        question: "How many players are there in a cricket team?",
        options: [{text: "7"}, {text: "9"}, {text: "11"}, {text: "13"}],
        correctAnswer: "11",
        topic: "Sports"
      },
      {
        id: 24,
        question: "How many players are there in a football team?",
        options: [{text: "7"}, {text: "9"}, {text: "11"}, {text: "13"}],
        correctAnswer: "11",
        topic: "Sports"
      },
      {
        id: 25,
        question: "Which is the most popular sport in Bangladesh?",
        options: [{text: "Football"}, {text: "Cricket"}, {text: "Kabaddi"}, {text: "Badminton"}],
        correctAnswer: "Cricket",
        topic: "Sports"
      },
      {
        id: 26,
        question: "Which famous Bangladeshi player is associated with cricket?",
        options: [{text: "Jamal Bhuyan"}, {text: "Mamunul Islam"}, {text: "Shakib Al Hasan"}, {text: "Siddikur Rahman"}],
        correctAnswer: "Shakib Al Hasan",
        topic: "Sports"
      },
      {
        id: 27,
        question: "What is the short name for Bangladesh Krira Shikkha Protishtan?",
        options: [{text: "BKSP"}, {text: "BCB"}, {text: "BFF"}, {text: "BOA"}],
        correctAnswer: "BKSP",
        topic: "Sports"
      },
      {
        id: 28,
        question: "Which game requires a bat, ball, and wickets?",
        options: [{text: "Football"}, {text: "Hockey"}, {text: "Cricket"}, {text: "Badminton"}],
        correctAnswer: "Cricket",
        topic: "Sports"
      },
      {
        id: 29,
        question: "In which game do you hit the ball with your feet?",
        options: [{text: "Volleyball"}, {text: "Basketball"}, {text: "Football"}, {text: "Handball"}],
        correctAnswer: "Football",
        topic: "Sports"
      },
      {
        id: 30,
        question: "What is a cricket bat made of?",
        options: [{text: "Plastic"}, {text: "Willow Wood"}, {text: "Metal"}, {text: "Bamboo"}],
        correctAnswer: "Willow Wood",
        topic: "Sports"
      },
      {
        id: 31,
        question: "How many stumps are there in cricket?",
        options: [{text: "2"}, {text: "3"}, {text: "4"}, {text: "6"}],
        correctAnswer: "3",
        topic: "Sports"
      },
      {
        id: 32,
        question: "What is the short form of One Day International cricket?",
        options: [{text: "T20"}, {text: "Test"}, {text: "ODI"}, {text: "BPL"}],
        correctAnswer: "ODI",
        topic: "Sports"
      },
      {
        id: 33,
        question: "What is the usual color of the dress in Test cricket?",
        options: [{text: "Blue"}, {text: "Green"}, {text: "White"}, {text: "Red"}],
        correctAnswer: "White",
        topic: "Sports"
      },
      {
        id: 34,
        question: "What is it called when a batsman scores 100 runs?",
        options: [{text: "Fifty"}, {text: "Century"}, {text: "Double Century"}, {text: "Hattrick"}],
        correctAnswer: "Century",
        topic: "Sports"
      },
      {
        id: 35,
        question: "What is it called when a bowler takes 3 wickets in a row?",
        options: [{text: "Maiden"}, {text: "Clean Bowled"}, {text: "Hattrick"}, {text: "Wicket-maiden"}],
        correctAnswer: "Hattrick",
        topic: "Sports"
      },
      {
        id: 36,
        question: "In which year did Bangladesh win its first ICC Trophy?",
        options: [{text: "1997"}, {text: "1999"}, {text: "2003"}, {text: "2007"}],
        correctAnswer: "1997",
        topic: "Sports"
      },
      {
        id: 37,
        question: "Who was the captain of the 2019 Under-19 World Cup winning team?",
        options: [{text: "Mushfiqur Rahim"}, {text: "Shakib Al Hasan"}, {text: "Akbar Ali"}, {text: "Mashrafe Mortaza"}],
        correctAnswer: "Akbar Ali",
        topic: "Sports"
      },
      {
        id: 38,
        question: "What happens when all ten wickets are taken in cricket?",
        options: [{text: "Innings Break"}, {text: "All Out"}, {text: "Match Over"}, {text: "Powerplay"}],
        correctAnswer: "All Out",
        topic: "Sports"
      },
      {
        id: 39,
        question: "What is it called when a batsman scores 50 runs?",
        options: [{text: "Half-century"}, {text: "Century"}, {text: "Fifty-run partnership"}, {text: "Fifty"}],
        correctAnswer: "Half-century",
        topic: "Sports"
      },
      {
        id: 40,
        question: "Where is the Sher-e-Bangla National Cricket Stadium located?",
        options: [{text: "Chattogram"}, {text: "Khulna"}, {text: "Mirpur, Dhaka"}, {text: "Sylhet"}],
        correctAnswer: "Mirpur, Dhaka",
        topic: "Sports"
      },
      {
        id: 41,
        question: "In which sport do you find an umpire?",
        options: [{text: "Football"}, {text: "Basketball"}, {text: "Cricket"}, {text: "Volleyball"}],
        correctAnswer: "Cricket",
        topic: "Sports"
      },
      {
        id: 42,
        question: "The Cricket World Cup is generally held every how many years?",
        options: [{text: "2 years"}, {text: "3 years"}, {text: "4 years"}, {text: "5 years"}],
        correctAnswer: "4 years",
        topic: "Sports"
      },
      {
        id: 43,
        question: "How many players are in a Kabaddi team on the field?",
        options: [{text: "5"}, {text: "7"}, {text: "9"}, {text: "11"}],
        correctAnswer: "7",
        topic: "Sports"
      },
      {
        id: 44,
        question: "When was Kabaddi recognized as the national sport of Bangladesh?",
        options: [{text: "1971"}, {text: "1972"}, {text: "1973"}, {text: "1975"}],
        correctAnswer: "1972",
        topic: "Sports"
      },
      {
        id: 45,
        question: "What is the name of the traditional boat race in rural areas?",
        options: [{text: "Nouka Khela"}, {text: "Nouka Baich"}, {text: "Shorot Khela"}, {text: "Boishakhi Mela"}],
        correctAnswer: "Nouka Baich",
        topic: "Sports"
      },
      {
        id: 46,
        question: "In which game do two teams pull on a rope?",
        options: [{text: "Gollachut"}, {text: "Tug of War"}, {text: "Kanamachi"}, {text: "Dariabandha"}],
        correctAnswer: "Tug of War",
        topic: "Sports"
      },
      {
        id: 47,
        question: "Name a popular village game where one has to play blindfolded.",
        options: [{text: "Gollachut"}, {text: "Kanamachi"}, {text: "Bouchi"}, {text: "Ekka Dokka"}],
        correctAnswer: "Kanamachi",
        topic: "Sports"
      },
      {
        id: 48,
        question: "Who is the only person allowed to handle the ball in football?",
        options: [{text: "Defender"}, {text: "Striker"}, {text: "Goalkeeper"}, {text: "Midfielder"}],
        correctAnswer: "Goalkeeper",
        topic: "Sports"
      },
      {
        id: 49,
        question: "Which card is shown in football as a warning?",
        options: [{text: "Red Card"}, {text: "Yellow Card"}, {text: "Green Card"}, {text: "Blue Card"}],
        correctAnswer: "Yellow Card",
        topic: "Sports"
      },
      {
        id: 50,
        question: "What do you use a racket and shuttlecock for?",
        options: [{text: "Table Tennis"}, {text: "Lawn Tennis"}, {text: "Badminton"}, {text: "Squash"}],
        correctAnswer: "Badminton",
        topic: "Sports"
      },
      {
        id: 51,
        question: "What do you need for table tennis?",
        options: [{text: "A big table and ball"}, {text: "A small table, small ball, and paddle"}, {text: "A net and a ball"}, {text: "A racket and a ball"}],
        correctAnswer: "A small table, small ball, and paddle",
        topic: "Sports"
      },
      {
        id: 52,
        question: "Where is Bangabandhu National Stadium located?",
        options: [{text: "Dhaka"}, {text: "Chittagong"}, {text: "Rajshahi"}, {text: "Sylhet"}],
        correctAnswer: "Dhaka",
        topic: "Sports"
      },
      {
        id: 53,
        question: "Which team is called the 'Tigers'?",
        options: [{text: "Bangladesh Football Team"}, {text: "Bangladesh Hockey Team"}, {text: "Bangladesh Cricket Team"}, {text: "Bangladesh Kabaddi Team"}],
        correctAnswer: "Bangladesh Cricket Team",
        topic: "Sports"
      },
      {
        id: 54,
        question: "What is the ball used in badminton called?",
        options: [{text: "Cork"}, {text: "Feather Ball"}, {text: "Shuttlecock"}, {text: "Birdie"}],
        correctAnswer: "Shuttlecock",
        topic: "Sports"
      },
      {
        id: 55,
        question: "How many balls are there in one over in cricket?",
        options: [{text: "4"}, {text: "5"}, {text: "6"}, {text: "7"}],
        correctAnswer: "6",
        topic: "Sports"
      },
      {
        id: 56,
        question: "When is a player called an 'all-rounder'?",
        options: [{text: "Good at batting"}, {text: "Good at bowling"}, {text: "Good at both batting and bowling"}, {text: "Good at fielding"}],
        correctAnswer: "Good at both batting and bowling",
        topic: "Sports"
      },
      {
        id: 57,
        question: "What is a way to get out in cricket?",
        options: [{text: "Bold"}, {text: "Catch Out"}, {text: "LBW"}, {text: "All of the above"}],
        correctAnswer: "All of the above",
        topic: "Sports"
      },
      {
        id: 58,
        question: "Where do you have to put the ball in basketball?",
        options: [{text: "In the net"}, {text: "In the basket"}, {text: "In the goal"}, {text: "In the hole"}],
        correctAnswer: "In the basket",
        topic: "Sports"
      },
      {
        id: 59,
        question: "What is done before starting a game?",
        options: [{text: "A coin toss"}, {text: "A prayer"}, {text: "A warm-up"}, {text: "A whistle"}],
        correctAnswer: "A coin toss",
        topic: "Sports"
      },
      {
        id: 60,
        question: "What is the biggest hit in cricket called?",
        options: [{text: "Four (4 runs)"}, {text: "Six (6 runs)"}, {text: "Boundary"}, {text: "Over boundary"}],
        correctAnswer: "Six (6 runs)",
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
        question: "বাংলাদেশের জাতীয় খেলার নাম কী?",
        options: [{text: "ক্রিকেট"}, {text: "ফুটবল"}, {text: "কাবাডি (হাডুডু)"}, {text: "হকি"}],
        correctAnswer: "কাবাডি (হাডুডু)",
        topic: "খেলাধুলা"
      },
      {
        id: 19,
        question: "কোন ক্রিকেটার 'বাংলার টাইগার' নামে পরিচিত?",
        options: [{text: "সাকিব আল হাসান"}, {text: "মাশরাফি মুর্তজা"}, {text: "তামিম ইকবাল"}, {text: "মুশফিকুর রহিম"}],
        correctAnswer: "মাশরাফি মুর্তজা",
        topic: "খেলাধুলা"
      },
      {
        id: 23,
        question: "একটি ক্রিকেট খেলায় কতজন খেলোয়াড় থাকে?",
        options: [{text: "৭ জন"}, {text: "৯ জন"}, {text: "১১ জন"}, {text: "১৩ জন"}],
        correctAnswer: "১১ জন",
        topic: "খেলাধুলা"
      },
      {
        id: 24,
        question: "একটি ফুটবল খেলায় কতজন খেলোয়াড় থাকে?",
        options: [{text: "৭ জন"}, {text: "৯ জন"}, {text: "১১ জন"}, {text: "১৩ জন"}],
        correctAnswer: "১১ জন",
        topic: "খেলাধুলা"
      },
      {
        id: 25,
        question: "বাংলাদেশের সবচেয়ে জনপ্রিয় খেলা কোনটি?",
        options: [{text: "ফুটবল"}, {text: "ক্রিকেট"}, {text: "কাবাডি"}, {text: "ব্যাডমিন্টন"}],
        correctAnswer: "ক্রিকেট",
        topic: "খেলাধুলা"
      },
      {
        id: 26,
        question: "বাংলাদেশের বিখ্যাত খেলোয়াড় সাকিব আল হাসান কোন খেলার খেলোয়াড়?",
        options: [{text: "ফুটবল"}, {text: "হকি"}, {text: "ক্রিকেট"}, {text: "দাবা"}],
        correctAnswer: "ক্রিকেট",
        topic: "খেলাধুলা"
      },
      {
        id: 27,
        question: "বাংলাদেশ ক্রীড়া শিক্ষা প্রতিষ্ঠান-এর সংক্ষিপ্ত নাম কী?",
        options: [{text: "বিকেএসপি"}, {text: "বিসিবি"}, {text: "বাফুফে"}, {text: "বিওএ"}],
        correctAnswer: "বিকেএসপি",
        topic: "খেলাধুলা"
      },
      {
        id: 28,
        question: "কোন খেলায় ব্যাট, বল আর উইকেট লাগে?",
        options: [{text: "ফুটবল"}, {text: "হকি"}, {text: "ক্রিকেট"}, {text: "ব্যাডমিন্টন"}],
        correctAnswer: "ক্রিকেট",
        topic: "খেলাধুলা"
      },
      {
        id: 29,
        question: "কোন খেলায় পা দিয়ে বল মারতে হয়?",
        options: [{text: "ভলিবল"}, {text: "বাস্কেটবল"}, {text: "ফুটবল"}, {text: "হ্যান্ডবল"}],
        correctAnswer: "ফুটবল",
        topic: "খেলাধুলা"
      },
      {
        id: 30,
        question: "ক্রিকেট খেলার ব্যাট কী দিয়ে তৈরি হয়?",
        options: [{text: "প্লাস্টিক"}, {text: "উইলো কাঠ"}, {text: "ধাতু"}, {text: "বাঁশ"}],
        correctAnswer: "উইলো কাঠ",
        topic: "খেলাধুলা"
      },
      {
        id: 31,
        question: "ক্রিকেট খেলায় কয়টি স্টাম্প থাকে?",
        options: [{text: "২টি"}, {text: "৩টি"}, {text: "৪টি"}, {text: "৬টি"}],
        correctAnswer: "৩টি",
        topic: "খেলাধুলা"
      },
      {
        id: 32,
        question: "একদিনের আন্তর্জাতিক ক্রিকেটকে সংক্ষেপে কী বলা হয়?",
        options: [{text: "টি২০"}, {text: "টেস্ট"}, {text: "ওডিআই"}, {text: "বিপিএল"}],
        correctAnswer: "ওডিআই",
        topic: "খেলাধুলা"
      },
      {
        id: 33,
        question: "টেস্ট ক্রিকেট খেলার পোশাক সাধারণত কোন রঙের হয়?",
        options: [{text: "নীল"}, {text: "সবুজ"}, {text: "সাদা"}, {text: "লাল"}],
        correctAnswer: "সাদা",
        topic: "খেলাধুলা"
      },
      {
        id: 34,
        question: "ক্রিকেটে সবচেয়ে বেশি রান করলে তাকে কী বলা হয়?",
        options: [{text: "ফিফটি"}, {text: "সেঞ্চুরি (১০০ রান)"}, {text: "ডাবল সেঞ্চুরি"}, {text: "হ্যাটট্রিক"}],
        correctAnswer: "সেঞ্চুরি (১০০ রান)",
        topic: "খেলাধুলা"
      },
      {
        id: 35,
        question: "কোনো বোলার একবারে ৩টি উইকেট নিলে তাকে কী বলে?",
        options: [{text: "মেইডেন"}, {text: "ক্লিন বোল্ড"}, {text: "হ্যাট্রিক"}, {text: "উইকেট-মেইডেন"}],
        correctAnswer: "হ্যাট্রিক",
        topic: "খেলাধুলা"
      },
      {
        id: 36,
        question: "বাংলাদেশ কত সালে প্রথম আইসিসি ট্রফি চ্যাম্পিয়ন হয়?",
        options: [{text: "১৯৯৭ সালে"}, {text: "১৯৯৯ সালে"}, {text: "২০০৩ সালে"}, {text: "২০০৭ সালে"}],
        correctAnswer: "১৯৯৭ সালে",
        topic: "খেলাধুলা"
      },
      {
        id: 37,
        question: "২০১৯ অনুর্ধ্ব-১৯ বিশ্বকাপ জয়ী দলের অধিনায়ক কে ছিলেন?",
        options: [{text: "মুশফিকুর রহিম"}, {text: "সাকিব আল হাসান"}, {text: "আকবর আলী"}, {text: "মাশরাফি বিন মর্তুজা"}],
        correctAnswer: "আকবর আলী",
        topic: "খেলাধুলা"
      },
      {
        id: 38,
        question: "ক্রিকেটে দশটা উইকেট নিলে কী হয়?",
        options: [{text: "ইনিংস ব্রেক"}, {text: "অলআউট"}, {text: "ম্যাচ শেষ"}, {text: "পাওয়ার প্লে"}],
        correctAnswer: "অলআউট",
        topic: "খেলাধুলা"
      },
      {
        id: 39,
        question: "কোনো ব্যাটসম্যান ৫০ রান করলে তাকে কী বলা হয়?",
        options: [{text: "হাফ-সেঞ্চুরি"}, {text: "সেঞ্চুরি"}, {text: "পঞ্চাশ রানের জুটি"}, {text: "পঞ্চাশ"}],
        correctAnswer: "হাফ-সেঞ্চুরি",
        topic: "খেলাধুলা"
      },
      {
        id: 40,
        question: "শেরে বাংলা জাতীয় ক্রিকেট স্টেডিয়াম কোথায় অবস্থিত?",
        options: [{text: "চট্টগ্রাম"}, {text: "খুলনা"}, {text: "মিরপুর, ঢাকা"}, {text: "সিলেট"}],
        correctAnswer: "মিরপুর, ঢাকা",
        topic: "খেলাধুলা"
      },
      {
        id: 41,
        question: "কোন খেলার মাঠে আম্পায়ার থাকেন?",
        options: [{text: "ফুটবল"}, {text: "বাস্কেটবল"}, {text: "ক্রিকেট"}, {text: "ভলিবল"}],
        correctAnswer: "ক্রিকেট",
        topic: "খেলাধুলা"
      },
      {
        id: 42,
        question: "বিশ্বকাপ ক্রিকেট খেলা সাধারণত কত বছর পর পর হয়?",
        options: [{text: "২ বছর"}, {text: "৩ বছর"}, {text: "৪ বছর"}, {text: "৫ বছর"}],
        correctAnswer: "৪ বছর",
        topic: "খেলাধুলা"
      },
      {
        id: 43,
        question: "কাবাডি খেলায় একটি দলে মাঠে কতজন খেলোয়াড় থাকে?",
        options: [{text: "৫ জন"}, {text: "৭ জন"}, {text: "৯ জন"}, {text: "১১ জন"}],
        correctAnswer: "৭ জন",
        topic: "খেলাধুলা"
      },
      {
        id: 44,
        question: "হাডুডু খেলাকে কবে বাংলাদেশের জাতীয় খেলা হিসেবে স্বীকৃতি দেওয়া হয়?",
        options: [{text: "১৯৭১ সালে"}, {text: "১৯৭২ সালে"}, {text: "১৯৭৩ সালে"}, {text: "১৯৭৫ সালে"}],
        correctAnswer: "১৯৭২ সালে",
        topic: "খেলাধুলা"
      },
      {
        id: 45,
        question: "গ্রামের ঐতিহ্যবাহী নৌকা বাওয়া প্রতিযোগিতার নাম কী?",
        options: [{text: "নৌকা খেলা"}, {text: "নৌকা বাইচ"}, {text: "শরৎ খেলা"}, {text: "বৈশাখী মেলা"}],
        correctAnswer: "নৌকা বাইচ",
        topic: "খেলাধুলা"
      },
      {
        id: 46,
        question: "কোন খেলায় দড়ি ধরে দু'দল টানাটানি করে?",
        options: [{text: "গোল্লাছুট"}, {text: "রশি টানাটানি"}, {text: "কানামাছি"}, {text: "দাড়িয়াবান্ধা"}],
        correctAnswer: "রশি টানাটানি",
        topic: "খেলাধুলা"
      },
      {
        id: 47,
        question: "গ্রামের জনপ্রিয় একটি খেলার নাম বলো যেখানে চোখ বেঁধে খেলতে হয়?",
        options: [{text: "গোল্লাছুট"}, {text: "কানামাছি"}, {text: "বউচি"}, {text: "এক্কা দোক্কা"}],
        correctAnswer: "কানামাছি",
        topic: "খেলাধুলা"
      },
      {
        id: 48,
        question: "ফুটবলে বল ধরার অনুমতি একমাত্র কার আছে?",
        options: [{text: "ডিফেন্ডার"}, {text: "স্ট্রাইকার"}, {text: "গোলরক্ষক"}, {text: "মিডফিল্ডার"}],
        correctAnswer: "গোলরক্ষক",
        topic: "খেলাধুলা"
      },
      {
        id: 49,
        question: "কোন খেলায় হলুদ কার্ড দেখানো হয়?",
        options: [{text: "ক্রিকেট"}, {text: "ফুটবল"}, {text: "হকি"}, {text: "বাস্কেটবল"}],
        correctAnswer: "ফুটবল",
        topic: "খেলাধুলা"
      },
      {
        id: 50,
        question: "কোন খেলায় র্যাকেট এবং শাটলকক ব্যবহার করা হয়?",
        options: [{text: "টেবিল টেনিস"}, {text: "লন টেনিস"}, {text: "ব্যাডমিন্টন"}, {text: "স্কোয়াশ"}],
        correctAnswer: "ব্যাডমিন্টন",
        topic: "খেলাধুলা"
      },
      {
        id: 51,
        question: "কোন খেলায় টেবিল ও ছোট বল লাগে?",
        options: [{text: "একটি বড় টেবিল এবং বল"}, {text: "একটি ছোট টেবিল, ছোট বল এবং প্যাডেল"}, {text: "একটি নেট এবং একটি বল"}, {text: "একটি র্যাকেট এবং একটি বল"}],
        correctAnswer: "একটি ছোট টেবিল, ছোট বল এবং প্যাডেল",
        topic: "খেলাধুলা"
      },
      {
        id: 52,
        question: "বঙ্গবন্ধু জাতীয় স্টেডিয়াম কোথায় অবস্থিত?",
        options: [{text: "ঢাকা"}, {text: "চট্টগ্রাম"}, {text: "রাজশাহী"}, {text: "সিলেট"}],
        correctAnswer: "ঢাকা",
        topic: "খেলাধুলা"
      },
      {
        id: 53,
        question: "'টাইগার্স' (Tigers) নামে কোন দলকে ডাকা হয়?",
        options: [{text: "বাংলাদেশ ফুটবল দল"}, {text: "বাংলাদেশ হকি দল"}, {text: "বাংলাদেশ ক্রিকেট দল"}, {text: "বাংলাদেশ কাবাডি দল"}],
        correctAnswer: "বাংলাদেশ ক্রিকেট দল",
        topic: "খেলাধুলা"
      },
      {
        id: 54,
        question: "ব্যাডমিন্টনে যে পালকের বলটি ব্যবহার হয়, তার নাম কী?",
        options: [{text: "কর্ক"}, {text: "পালক বল"}, {text: "শাটলকক"}, {text: "বার্ডি"}],
        correctAnswer: "শাটলকক",
        topic: "খেলাধুলা"
      },
      {
        id: 55,
        question: "ক্রিকেট খেলায় এক ওভারে কয়টি বল করা হয়?",
        options: [{text: "৪টি"}, {text: "৫টি"}, {text: "৬টি"}, {text: "৭টি"}],
        correctAnswer: "৬টি",
        topic: "খেলাধুলা"
      },
      {
        id: 56,
        question: "একজন খেলোয়াড়কে 'অলরাউন্ডার' কখন বলা হয়?",
        options: [{text: "ব্যাটিংয়ে ভালো করলে"}, {text: "বোলিংয়ে ভালো করলে"}, {text: "ব্যাটিং ও বোলিং দুটোতেই ভালো করলে"}, {text: "ফিল্ডিংয়ে ভালো করলে"}],
        correctAnswer: "ব্যাটিং ও বোলিং দুটোতেই ভালো করলে",
        topic: "খেলাধুলা"
      },
      {
        id: 57,
        question: "ক্রিকেট খেলায় আউট হওয়ার একটি কারণ বলো।",
        options: [{text: "বোল্ড"}, {text: "ক্যাচ আউট"}, {text: "এলবিডব্লিউ"}, {text: "সবগুলো"}],
        correctAnswer: "সবগুলো",
        topic: "খেলাধুলা"
      },
      {
        id: 58,
        question: "বাস্কেটবল খেলায় বল কোথায় ঢোকাতে হয়?",
        options: [{text: "নেটে"}, {text: "বাস্কেটে (ঝুড়িতে)"}, {text: "গোলে"}, {text: "গর্তে"}],
        correctAnswer: "বাস্কেটে (ঝুড়িতে)",
        topic: "খেলাধুলা"
      },
      {
        id: 59,
        question: "কোনো খেলা শুরু করার আগে কী করা হয়?",
        options: [{text: "টস"}, {text: "প্রার্থনা"}, {text: "ওয়ার্ম-আপ"}, {text: "বাঁশি"}],
        correctAnswer: "টস",
        topic: "খেলাধুলা"
      },
      {
        id: 60,
        question: "ক্রিকেটে সবচেয়ে বড় মারকে কী বলা হয়?",
        options: [{text: "চার (৪ রান)"}, {text: "ছক্কা (৬ রান)"}, {text: "বাউন্ডারি"}, {text: "ওভার বাউন্ডারি"}],
        correctAnswer: "ছক্কা (৬ রান)",
        topic: "খেলাধুলা"
      }
    ]
  },
};
