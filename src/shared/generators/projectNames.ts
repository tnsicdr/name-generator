import { adjectives } from '../dictionaries/adjective';
import { nouns } from '../dictionaries/noun';
import { randomlyPickFromArray } from '../utils/arrays';

/**
 * Generates a project name from an adjective and a noun
 * @returns A project name
 */
export function generateProjectName() {
  const adjective = randomlyPickFromArray(adjectives);
  const noun = randomlyPickFromArray(nouns);

  return [adjective, noun].join(' ');
}
