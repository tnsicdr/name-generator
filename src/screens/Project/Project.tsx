import { BaseLayout } from '../../layouts/BaseLayout/BaseLayout';
import { ProjectNameGenerator } from './components/ProjectNameGenerator/ProjectNameGenerator';
import styles from './Project.module.css';

export function Project() {
  return (
    <BaseLayout>
      <h2 className={styles['title']}>Project Name Generator</h2>
      <ProjectNameGenerator />
    </BaseLayout>
  );
}
