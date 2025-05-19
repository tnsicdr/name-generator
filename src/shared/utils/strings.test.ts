import { stringToKey } from './strings';

describe('String Utils', () => {
  describe('stringToKey', () => {
    it('converts a string to the appropriate key kebab format', () => {
      const result = stringToKey('Flying cHeeSe CAR');

      expect(result).toEqual('flying-cheese-car');
    });

    it('converts a tabbed string to the appropriate key kebab format', () => {
      const result = stringToKey('Flying	cHeeSe CAR');

      expect(result).toEqual('flying-cheese-car');
    });

    it('converts non-latin characters to a key', () => {
      const result = stringToKey('もち　ばし');

      expect(result).toEqual('もち-ばし');
    });
  });
});
