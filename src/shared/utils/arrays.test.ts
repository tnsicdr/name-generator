import { randomlyPickFromArray } from './arrays';

describe('Array Utils', () => {
  describe('randomlyPickFromArray', () => {
    it('picks a defined element in the array', () => {
      const array = ['cheese', 'board', 'flying', 'torpor'];
      const result = randomlyPickFromArray(array);

      expect(result).toBeDefined();
      expect(array.includes(result!)).toBeTruthy();
    });
    it('emits undefined for an empty array', () => {
      const array: string[] = [];
      const result = randomlyPickFromArray(array);

      expect(result).toEqual(undefined);
    });
  });
});
