import { useCallback, useState } from 'react';
import { BaseLayout } from '../../layouts/BaseLayout/BaseLayout';
import { stringToKey } from '../../shared/utils/strings';
import { generateProjectName } from '../../shared/generators/projectNames';
import styles from './Project.module.css';

export function Project() {
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
    <BaseLayout>
      <h2 className={styles['title']}>Project Name Generator</h2>
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
    </BaseLayout>
  );
}
