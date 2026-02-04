export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export const chatHistory: Message[] = [
  {
    id: '1',
    text: "👋 Hi, I'm BuBu, your health companion!\nI'm here to help you track your health, build better habits, and stay motivated 💙",
    sender: 'bot',
    timestamp: '9:41',
  },
  {
    id: '2',
    text: 'Hi BuBu,\nCan you check my health today?',
    sender: 'user',
    timestamp: '9:42',
  },
  {
    id: '3',
    text: "I've been feeling quite tired for the past few days, especially in the morning.\nEven after sleeping for around 6-7 hours, I still wake up feeling exhausted.",
    sender: 'user',
    timestamp: '9:42',
  },
  {
    id: '4',
    text: 'I also spend a lot of time sitting and using my phone and laptop for work,\nso my eyes feel sore and my neck and shoulders are often stiff.',
    sender: 'user',
    timestamp: '9:43',
  },
];

export const suggestedQuestions = [
  'Check my health today?',
  'What should i eat today?',
  "What's a simple workout for today?",
];
