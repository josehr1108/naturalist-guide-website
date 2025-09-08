import { Tour } from "../constants/types";

export const getRandomTours = (arr: Tour[], numElements: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Create a shuffled copy
  return shuffled.slice(0, numElements); // Take the first 'numElements'
};
