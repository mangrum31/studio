export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  topic: string;
}

export const quizQuestions: QuizQuestion[] = [
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
];
