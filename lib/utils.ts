import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { historyMessage } from '@/src/types/chatbot';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMessageText = (item: historyMessage): string => {
  // User message: dùng nguyên văn
  if (item.role === 'user') {
    return item.message;
  }

  // Bot message: thử parse JSON
  try {
    const parsed = JSON.parse(item.message);
    return parsed.response;
  } catch (error) {
    console.error('Failed to parse bot message', error);
    return item.message;
  }
};
