/**
 * Converts a string to a react key in kebab lowercase
 */
export function stringToKey(str: string) {
  const lowerString = str.trim().toLocaleLowerCase();

  return lowerString.split(/[\s\u3000]+/).join('-');
}
