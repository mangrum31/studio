
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
        question: "Which one is an Apple?",
        options: [
          { text: "Apple", imageUrl: "https://picsum.photos/seed/apple/200/200", imageHint: "apple" },
          { text: "Ball", imageUrl: "https://picsum.photos/seed/randomball/200/200", imageHint: "ball" },
          { text: "Cat", imageUrl: "https://picsum.photos/seed/randomcat/200/200", imageHint: "cat" },
          { text: "Dog", imageUrl: "https://picsum.photos/seed/randomdog/200/200", imageHint: "dog" },
        ],
        correctAnswer: "Apple",
        topic: "Alphabet",
      },
      {
        id: 21,
        question: "Which one is a Ball?",
        options: [
          { text: "Cat", imageUrl: "https://picsum.photos/seed/randomcat2/200/200", imageHint: "cat" },
          { text: "Ball", imageUrl: "https://picsum.photos/seed/ball/200/200", imageHint: "ball" },
          { text: "Dog", imageUrl: "https://picsum.photos/seed/randomdog2/200/200", imageHint: "dog" },
          { text: "Apple", imageUrl: "https://picsum.photos/seed/randomapple2/200/200", imageHint: "apple" },
        ],
        correctAnswer: "Ball",
        topic: "Alphabet",
      },
      {
        id: 22,
        question: "Which one is a Cat?",
        options: [
          { text: "Dog", imageUrl: "https://picsum.photos/seed/randomdog3/200/200", imageHint: "dog" },
          { text: "Apple", imageUrl: "https://picsum.photos/seed/randomapple3/200/200", imageHint: "apple" },
          { text: "Cat", imageUrl: "https://picsum.photos/seed/cat/200/200", imageHint: "cat" },
          { text: "Ball", imageUrl: "https://picsum.photos/seed/randomball3/200/200", imageHint: "ball" },
        ],
        correctAnswer: "Cat",
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
      },
      {
        id: 104,
        question: "What is the national fish of Bangladesh?",
        options: [{text: "Rui"}, {text: "Katla"}, {text: "Hilsa (Ilish)"}, {text: "Prawn"}],
        correctAnswer: "Hilsa (Ilish)",
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
      {
        id: 142,
        question: "The movement for which language took place in 1952?",
        options: [{text: "English"}, {text: "Hindi"}, {text: "Bengali"}, {text: "Urdu"}],
        correctAnswer: "Bengali",
        topic: "Literature & Arts"
      },
      {
        id: 143,
        question: "What do we call February 21st?",
        options: [{text: "Independence Day"}, {text: "Victory Day"}, {text: "Martyr's Day"}, {text: "New Year's Day"}],
        correctAnswer: "Martyr's Day",
        topic: "Literature & Arts"
      },
      {
        id: 145,
        question: "How many letters are in the Bengali alphabet?",
        options: [{text: "40"}, {text: "50"}, {text: "30"}, {text: "60"}],
        correctAnswer: "50",
        topic: "Literature & Arts"
      }
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
      {
        id: 108,
        question: "Which month does the Bengali year start from?",
        options: [{text: "Boishakh"}, {text: "Jaishtha"}, {text: "Falgun"}, {text: "Chaitra"}],
        correctAnswer: "Boishakh",
        topic: "Culture & Lifestyle"
      },
      {
        id: 110,
        question: "What is the most popular vehicle in the rural areas of Bangladesh?",
        options: [{text: "Car"}, {text: "Bus"}, {text: "Rickshaw"}, {text: "Train"}],
        correctAnswer: "Rickshaw",
        topic: "Culture & Lifestyle"
      },
      {
        id: 112,
        question: "What food is eaten on the morning of Pohela Boishakh?",
        options: [{text: "Biryani"}, {text: "Panta Bhat and Hilsa fish"}, {text: "Khichuri"}, {text: "Paratha"}],
        correctAnswer: "Panta Bhat and Hilsa fish",
        topic: "Culture & Lifestyle"
      },
      {
        id: 113,
        question: "Which procession is brought out from Dhaka University's Fine Arts faculty on Pohela Boishakh morning?",
        options: [{text: "Victory Procession"}, {text: "Mourning Procession"}, {text: "Mangal Shobhajatra"}, {text: "Book Fair Procession"}],
        correctAnswer: "Mangal Shobhajatra",
        topic: "Culture & Lifestyle"
      },
      {
        id: 115,
        question: "During which festival do we wear new clothes and receive 'Salami'?",
        options: [{text: "Pohela Boishakh"}, {text: "Durga Puja"}, {text: "Eid"}, {text: "Christmas"}],
        correctAnswer: "Eid",
        topic: "Culture & Lifestyle"
      },
      {
        id: 116,
        question: "What is the biggest festival of the Hindu community?",
        options: [{text: "Holi"}, {text: "Diwali"}, {text: "Durga Puja"}, {text: "Saraswati Puja"}],
        correctAnswer: "Durga Puja",
        topic: "Culture & Lifestyle"
      },
      {
        id: 117,
        question: "In which month is the book fair held?",
        options: [{text: "January"}, {text: "February"}, {text: "March"}, {text: "April"}],
        correctAnswer: "February",
        topic: "Culture & Lifestyle"
      },
      {
        id: 122,
        question: "What is the traditional dress for Bangladeshi women?",
        options: [{text: "Sari"}, {text: "Gown"}, {text: "Skirt"}, {text: "Jeans"}],
        correctAnswer: "Sari",
        topic: "Culture & Lifestyle"
      },
      {
        id: 123,
        question: "What traditional attire do boys usually wear to celebrate Pohela Boishakh?",
        options: [{text: "Shirt-Pant"}, {text: "Panjabi"}, {text: "Suit"}, {text: "T-shirt"}],
        correctAnswer: "Panjabi",
        topic: "Culture & Lifestyle"
      },
      {
        id: 125,
        question: "What is 'Nakshi Kantha' made from?",
        options: [{text: "New clothes"}, {text: "Sewing old clothes"}, {text: "Wool"}, {text: "Silk"}],
        correctAnswer: "Sewing old clothes",
        topic: "Culture & Lifestyle"
      },
      {
        id: 126,
        question: "Which sari from Bangladesh is world-famous?",
        options: [{text: "Tant Sari"}, {text: "Silk Sari"}, {text: "Jamdani Sari"}, {text: "Muslin Sari"}],
        correctAnswer: "Jamdani Sari",
        topic: "Culture & Lifestyle"
      },
      {
        id: 130,
        question: "What is the famous place for Jamdani sarees?",
        options: [{text: "Dhaka"}, {text: "Sonargaon, Narayanganj"}, {text: "Comilla"}, {text: "Tangail"}],
        correctAnswer: "Sonargaon, Narayanganj",
        topic: "Culture & Lifestyle"
      },
      {
        id: 131,
        question: "What is the staple food of Bengalis?",
        options: [{text: "Bread and meat"}, {text: "Rice and fish"}, {text: "Noodles"}, {text: "Pizza"}],
        correctAnswer: "Rice and fish",
        topic: "Culture & Lifestyle"
      },
      {
        id: 132,
        question: "Which fruit is called the king of fruits?",
        options: [{text: "Jackfruit"}, {text: "Mango"}, {text: "Litchi"}, {text: "Guava"}],
        correctAnswer: "Mango",
        topic: "Culture & Lifestyle"
      },
      {
        id: 134,
        question: "What is a sweet dish made from rice called?",
        options: [{text: "Halwa"}, {text: "Pitha or Payesh"}, {text: "Jalebi"}, {text: "Laddu"}],
        correctAnswer: "Pitha or Payesh",
        topic: "Culture & Lifestyle"
      },
      {
        id: 136,
        question: "Name a type of pitha that is made during winter.",
        options: [{text: "Puli Pitha"}, {text: "Bhapa Pitha"}, {text: "Nokshi Pitha"}, {text: "Malpua"}],
        correctAnswer: "Bhapa Pitha",
        topic: "Culture & Lifestyle"
      },
      {
        id: 137,
        question: "What is a round, syrup-filled sweet found in sweet shops?",
        options: [{text: "Sandesh"}, {text: "Rasgulla"}, {text: "Kalojam"}, {text: "Barfi"}],
        correctAnswer: "Rasgulla",
        topic: "Culture & Lifestyle"
      },
      {
        id: 151,
        question: "Name a famous folk singer of Bangladesh.",
        options: [{text: "James"}, {text: "Abbasuddin Ahmed"}, {text: "Ayub Bachchu"}, {text: "Runa Laila"}],
        correctAnswer: "Abbasuddin Ahmed",
        topic: "Culture & Lifestyle"
      },
      {
        id: 153,
        question: "Who is a famous singer of Baul songs?",
        options: [{text: "Rabindranath Tagore"}, {text: "Kazi Nazrul Islam"}, {text: "Lalon Shah"}, {text: "Hason Raja"}],
        correctAnswer: "Lalon Shah",
        topic: "Culture & Lifestyle"
      },
      {
        id: 158,
        question: "Which one-stringed musical instrument do Baul artists play?",
        options: [{text: "Guitar"}, {text: "Sitar"}, {text: "Ektara"}, {text: "Dotara"}],
        correctAnswer: "Ektara",
        topic: "Culture & Lifestyle"
      },
      {
        id: 161,
        question: "What is the main occupation of the village people?",
        options: [{text: "Business"}, {text: "Agriculture"}, {text: "Fishing"}, {text: "Pottery"}],
        correctAnswer: "Agriculture",
        topic: "Culture & Lifestyle"
      },
      {
        id: 171,
        question: "What should we do when we see elders?",
        options: [{text: "Ignore them"}, {text: "Greet them (Salam/Namaskar)"}, {text: "Run away"}, {text: "Be silent"}],
        correctAnswer: "Greet them (Salam/Namaskar)",
        topic: "Culture & Lifestyle"
      },
      {
        id: 181,
        question: "Where is the Folk Art and Craft Museum of Bangladesh located?",
        options: [{text: "Dhaka"}, {text: "Sonargaon"}, {text: "Comilla"}, {text: "Rajshahi"}],
        correctAnswer: "Sonargaon",
        topic: "Culture & Lifestyle"
      }
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
        question: "কোনটি আপেল?",
        options: [
          { text: "আপেল", imageUrl: "https://picsum.photos/seed/apple/200/200", imageHint: "apple" },
          { text: "বল", imageUrl: "https://picsum.photos/seed/randomball/200/200", imageHint: "ball" },
          { text: "বিড়াল", imageUrl: "https://picsum.photos/seed/randomcat/200/200", imageHint: "cat" },
          { text: "কুকুর", imageUrl: "https://picsum.photos/seed/randomdog/200/200", imageHint: "dog" },
        ],
        correctAnswer: "আপেল",
        topic: "বর্ণমালা",
      },
      {
        id: 21,
        question: "কোনটি বল?",
        options: [
          { text: "বিড়াল", imageUrl: "https://picsum.photos/seed/randomcat2/200/200", imageHint: "cat" },
          { text: "বল", imageUrl: "https://picsum.photos/seed/ball/200/200", imageHint: "ball" },
          { text: "কুকুর", imageUrl: "https://picsum.photos/seed/randomdog2/200/200", imageHint: "dog" },
          { text: "আপেল", imageUrl: "https://picsum.photos/seed/randomapple2/200/200", imageHint: "apple" },
        ],
        correctAnswer: "বল",
        topic: "বর্ণমালা",
      },
      {
        id: 22,
        question: "কোনটি বিড়াল?",
        options: [
          { text: "কুকুর", imageUrl: "https://picsum.photos/seed/randomdog3/200/200", imageHint: "dog" },
          { text: "আপেল", imageUrl: "https://picsum.photos/seed/randomapple3/200/200", imageHint: "apple" },
          { text: "বিড়াল", imageUrl: "https://picsum.photos/seed/cat/200/200", imageHint: "cat" },
          { text: "বল", imageUrl: "https://picsum.photos/seed/randomball3/200/200", imageHint: "ball" },
        ],
        correctAnswer: "বিড়াল",
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
      },
      {
        id: 104,
        question: "বাংলাদেশের জাতীয় মাছের নাম কী?",
        options: [{text: "রুই"}, {text: "কাতলা"}, {text: "ইলিশ"}, {text: "চিংড়ি"}],
        correctAnswer: "ইলিশ",
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
      {
        id: 142,
        question: "বাংলা ভাষার জন্য কবে আন্দোলন হয়েছিল?",
        options: [{text: "১৯৪৭"}, {text: "১৯৫২"}, {text: "১৯৭১"}, {text: "১৯ Fév"}],
        correctAnswer: "১৯৫২",
        topic: "সাহিত্য ও শিল্প"
      },
      {
        id: 143,
        question: "২১ ফেব্রুয়ারিকে আমরা আর কী নামে ডাকি?",
        options: [{text: "স্বাধীনতা দিবস"}, {text: "বিজয় দিবস"}, {text: "শহীদ দিবস"}, {text: "নববর্ষ"}],
        correctAnswer: "শহীদ দিবস",
        topic: "সাহিত্য ও শিল্প"
      },
      {
        id: 145,
        question: "বাংলা বর্ণমালায় মোট কয়টি বর্ণ আছে?",
        options: [{text: "৪০টি"}, {text: "৫০টি"}, {text: "৩০টি"}, {text: "৬০টি"}],
        correctAnswer: "৫০টি",
        topic: "সাহিত্য ও শিল্প"
      }
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
      {
        id: 108,
        question: "কোন মাস থেকে বাংলা বছর শুরু হয়?",
        options: [{text: "বৈশাখ"}, {text: "জ্যৈষ্ঠ"}, {text: "ফাল্গুন"}, {text: "চৈত্র"}],
        correctAnswer: "বৈশাখ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 110,
        question: "বাংলাদেশের গ্রামীণ অঞ্চলের সবচেয়ে জনপ্রিয় যান কোনটি?",
        options: [{text: "গাড়ি"}, {text: "বাস"}, {text: "রিকশা"}, {text: "ট্রেন"}],
        correctAnswer: "রিকশা",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 112,
        question: "পহেলা বৈশাখে সকালে কী খাবার খাওয়া হয়?",
        options: [{text: "বিরিয়ানি"}, {text: "পান্তা ভাত ও ইলিশ মাছ"}, {text: "খিচুড়ি"}, {text: "পরোটা"}],
        correctAnswer: "পান্তা ভাত ও ইলিশ মাছ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 113,
        question: "পহেলা বৈশাখের সকালে ঢাকা বিশ্ববিদ্যালয়ের চারুকলা থেকে কোন শোভাযাত্রা বের হয়?",
        options: [{text: "বিজয় মিছিল"}, {text: "শোক মিছিল"}, {text: "মঙ্গল শোভাযাত্রা"}, {text: "বইমেলা মিছিল"}],
        correctAnswer: "মঙ্গল শোভাযাত্রা",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 115,
        question: "কোন উৎসবের সময় আমরা নতুন জামা পরি এবং সালামী পাই?",
        options: [{text: "পহেলা বৈশাখ"}, {text: "দুর্গাপূজা"}, {text: "ঈদ"}, {text: "বড়দিন"}],
        correctAnswer: "ঈদ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 116,
        question: "হিন্দু ধর্মাবলম্বীদের সবচেয়ে বড় উৎসব কোনটি?",
        options: [{text: "হোলি"}, {text: "দীপাবলি"}, {text: "দুর্গাপূজা"}, {text: "সরস্বতী পূজা"}],
        correctAnswer: "দুর্গাপূজা",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 117,
        question: "কোন মাসে বইমেলা অনুষ্ঠিত হয়?",
        options: [{text: "জানুয়ারি"}, {text: "ফেব্রুয়ারি"}, {text: "মার্চ"}, {text: "এপ্রিল"}],
        correctAnswer: "ফেব্রুয়ারি",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 122,
        question: "বাংলাদেশের মেয়েদের ঐতিহ্যবাহী পোশাক কোনটি?",
        options: [{text: "শাড়ি"}, {text: "গাউন"}, {text: "স্কার্ট"}, {text: "জিন্স"}],
        correctAnswer: "শাড়ি",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 123,
        question: "ছেলেরা সাধারণত কোন ঐতিহ্যবাহী পোশাকে পহেলা বৈশাখ পালন করে?",
        options: [{text: "শার্ট-প্যান্ট"}, {text: "পাঞ্জাবি"}, {text: "স্যুট"}, {text: "টি-শার্ট"}],
        correctAnswer: "পাঞ্জাবি",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 125,
        question: "নকশি কাঁথা কী দিয়ে তৈরি হয়?",
        options: [{text: "নতুন কাপড়"}, {text: "পুরানো কাপড় সেলাই করে"}, {text: "উল"}, {text: "সিল্ক"}],
        correctAnswer: "পুরানো কাপড় সেলাই করে",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 126,
        question: "বাংলাদেশের কোন শাড়ি বিশ্ব বিখ্যাত?",
        options: [{text: "তাঁত শাড়ি"}, {text: "সিল্ক শাড়ি"}, {text: "জামদানি শাড়ি"}, {text: "মসলিন শাড়ি"}],
        correctAnswer: "জামদানি শাড়ি",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 130,
        question: "জামদানি শাড়ির জন্য বিখ্যাত জায়গার নাম কী?",
        options: [{text: "ঢাকা"}, {text: "নারায়ণগঞ্জের সোনারগাঁও"}, {text: "কুমিল্লা"}, {text: "টাঙ্গাইল"}],
        correctAnswer: "নারায়ণগঞ্জের সোনারগাঁও",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 131,
        question: "বাঙালির প্রধান খাদ্য কী?",
        options: [{text: "রুটি ও মাংস"}, {text: "ভাত ও মাছ"}, {text: "নুডলস"}, {text: "পিজা"}],
        correctAnswer: "ভাত ও মাছ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 132,
        question: "কোন ফলকে ফলের রাজা বলা হয়?",
        options: [{text: "কাঁঠাল"}, {text: "আম"}, {text: "লিচু"}, {text: "পেয়ারা"}],
        correctAnswer: "আম",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 134,
        question: "চাল থেকে তৈরি একটি মিষ্টি খাবারের নাম বলো।",
        options: [{text: "হালুয়া"}, {text: "পায়েস বা পিঠা"}, {text: "জিলাপি"}, {text: "লাড্ডু"}],
        correctAnswer: "পায়েস বা পিঠা",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 136,
        question: "শীতকালে বানানো হয় এমন একটি পিঠার নাম বলো।",
        options: [{text: "পুলি পিঠা"}, {text: "ভাপা পিঠা"}, {text: "নকশি পিঠা"}, {text: "মালপোয়া"}],
        correctAnswer: "ভাপা পিঠা",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 137,
        question: "মিষ্টির দোকানে গোল, রসে ভরা কোন মিষ্টি পাওয়া যায়?",
        options: [{text: "সন্দেশ"}, {text: "রসগোল্লা"}, {text: "কালোজাম"}, {text: "বরফি"}],
        correctAnswer: "রসগোল্লা",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 151,
        question: "বাংলাদেশের একজন জনপ্রিয় লোকগানের শিল্পীর নাম বলো।",
        options: [{text: "জেমস"}, {text: "আব্বাসউদ্দিন আহমদ"}, {text: "আইয়ুব বাচ্চু"}, {text: "রুনা লায়লা"}],
        correctAnswer: "আব্বাসউদ্দিন আহমদ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 153,
        question: "বাউল গানের একজন বিখ্যাত গায়কের নাম কী?",
        options: [{text: "রবীন্দ্রনাথ ঠাকুর"}, {text: "কাজী নজরুল ইসলাম"}, {text: "লালন সাঁই"}, {text: "হাসন রাজা"}],
        correctAnswer: "লালন সাঁই",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 158,
        question: "কোন শিল্পীরা একটি তারের বাদ্যযন্ত্র একতারা বাজায়?",
        options: [{text: "গিটার"}, {text: "সেতার"}, {text: "একতারা"}, {text: "দোতারা"}],
        correctAnswer: "একতারা",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 161,
        question: "গ্রামের মানুষ প্রধানত কী কাজ করে জীবিকা নির্বাহ করে?",
        options: [{text: "ব্যবসা"}, {text: "কৃষিকাজ"}, {text: "মাছ ধরা"}, {text: "কুমোরের কাজ"}],
        correctAnswer: "কৃষিকাজ",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 171,
        question: "বড়দের দেখলে আমাদের কী করতে হয়?",
        options: [{text: "এড়িয়ে চলা"}, {text: "সালাম / নমস্কার করতে হয়"}, {text: "দৌড়ে পালানো"}, {text: "চুপ থাকা"}],
        correctAnswer: "সালাম / নমস্কার করতে হয়",
        topic: "সংস্কৃতি ও জীবনধারা"
      },
      {
        id: 181,
        question: "বাংলাদেশের লোকশিল্প জাদুঘর কোথায় অবস্থিত?",
        options: [{text: "ঢাকা"}, {text: "সোনারগাঁও"}, {text: "কুমিল্লা"}, {text: "রাজশাহী"}],
        correctAnswer: "সোনারগাঁও",
        topic: "সংস্কৃতি ও জীবনধারা"
      }
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
