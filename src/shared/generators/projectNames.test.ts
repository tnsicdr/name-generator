import { generateProjectName } from './projectNames';

describe('Project Name Generator', () => {
  it('generates some sort of output', () => {
    const result = generateProjectName();

    expect(result).not.toBeFalsy();
  });
});
