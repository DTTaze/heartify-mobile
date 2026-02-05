export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export const suggestedQuestions = [
  'Check my health today?',
  'What should i eat today?',
  "What's a simple workout for today?",
];
