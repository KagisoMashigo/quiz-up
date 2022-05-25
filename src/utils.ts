/// Quick fix, not completely random
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
