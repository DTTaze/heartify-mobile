export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const guessDifficulty = (bodyPart: string, equipment: string) => {
  if (equipment === 'weighted') return 'Hard';
  if (bodyPart === 'cardio') return 'Medium';
  return 'Easy';
};

export const guessCalories = (bodyPart: string) => {
  switch (bodyPart) {
    case 'cardio':
      return '300 kcal';
    case 'chest':
    case 'back':
      return '200 kcal';
    default:
      return '150 kcal';
  }
};
