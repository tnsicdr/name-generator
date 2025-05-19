import { classNames } from './classNames';

describe('classNames Utils', () => {
  describe('classNames', () => {
    it('merges supplied class names of strings', () => {
      const result = classNames(['home', 'widget', 'flying-system']);

      expect(result).toEqual('home widget flying-system');
    });

    it('excludes null and undefined properties in the class names', () => {
      const result = classNames(['home', 'visual-only', undefined, 'widget']);

      expect(result).toEqual('home visual-only widget');
    });

    it('excludes falsy properties in the class names', () => {
      const result = classNames(['home', 'visual-only', '', 'widget', false]);

      expect(result).toEqual('home visual-only widget');
    });

    it('handles functions that resolve to supported types', () => {
      const mockBoolFn = (val: boolean) => (val ? 'supported' : 'unsupported');
      const result = classNames([
        'home',
        'visual-only',
        '',
        'widget',
        mockBoolFn(false),
      ]);

      expect(result).toEqual('home visual-only widget unsupported');
    });
  });
});
