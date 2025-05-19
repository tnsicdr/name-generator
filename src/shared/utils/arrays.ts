/**
 * Randomly picks an element from an array
 */
export function randomlyPickFromArray<T>(array: T[]): T | undefined {
  const randomIndex = Math.floor((Math.random() * array.length) | 0);

  return array[randomIndex];
}
