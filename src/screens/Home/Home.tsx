import { NavLink } from 'react-router';
import { BaseLayout } from '../../layouts/BaseLayout/BaseLayout';

export function Home() {
  return (
    <BaseLayout>
      <ul>
        <li>
          <NavLink to="/project">Project Names</NavLink>
        </li>
      </ul>
    </BaseLayout>
  );
}
