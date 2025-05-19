import { Outlet } from 'react-router';

/**
 * Root Component that renders an outlet for all child paths
 * @returns {JSX.Element}
 */
export function Root() {
  return <Outlet />;
}
