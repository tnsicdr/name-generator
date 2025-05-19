import { useState } from 'react';
import styles from './ProjectNameGenerator.module.css';
import { generateProjectName } from '../../../../shared/generators/projectNames';
import { stringToKey } from '../../../../shared/utils/strings';

export function ProjectNameGenerator() {
  const [names, setNames] = useState<string[] | undefined>();

  const handleGenerate = () => {
    const iterations = 20;
    const generatedNames: string[] = [];

    for (let i = 0; i < iterations; i++) {
      const generatedName = generateProjectName();

      generatedNames.push(generatedName);
    }
    setNames(structuredClone(generatedNames));
  };

  return (
    <div>
      <button className={styles['generate-button']} onClick={handleGenerate}>
        Generate
      </button>
      <div>
        {/* Using the index as part of the key here avoids an issue with stale entries on safari*/}
        {names ? (
          <ul className={styles['name-list']}>
            {names.map((name, idx) => (
              <li key={`${stringToKey(name)}-${idx}`}>{name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
