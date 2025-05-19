import { NavLink } from 'react-router';
import { BaseLayout } from '../../layouts/BaseLayout/BaseLayout';

const BASE = import.meta.env.BASE_URL;

export function Home() {
  return (
    <BaseLayout>
      <ul>
        <li>
          <NavLink to={`${BASE}project`}>Project Names</NavLink>
        </li>
      </ul>
    </BaseLayout>
  );
}
