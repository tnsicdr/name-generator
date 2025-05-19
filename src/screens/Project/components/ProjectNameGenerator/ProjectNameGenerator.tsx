import { useCallback, useState } from 'react';
import styles from './ProjectNameGenerator.module.css';
import { generateProjectName } from '../../../../shared/generators/projectNames';
import { stringToKey } from '../../../../shared/utils/strings';

export function ProjectNameGenerator() {
  const [names, setNames] = useState<string[] | undefined>();

  const handleGenerate = useCallback(() => {
    const iterations = 20;
    const generatedNames: string[] = [];

    for (let i = 0; i < iterations; i++) {
      const generatedName = generateProjectName();

      generatedNames.push(generatedName);
    }

    setNames(generatedNames);
  }, []);

  return (
    <div>
      <button className={styles['generate-button']} onClick={handleGenerate}>
        Generate
      </button>
      <div>
        {names ? (
          <ul className={styles['name-list']}>
            {names.map((name) => (
              <li key={stringToKey(name)}>{name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
