import { NavLink } from 'react-router';
import styles from './AppBar.module.css';

type AppBarProps = {
  appName: string;
  featureName?: string;
  className?: string;
};

export function AppBar({ appName, className }: Readonly<AppBarProps>) {
  return (
    <div className={`${styles['container']} ${className}`}>
      <NavLink to="/">
        <h1>{appName}</h1>
      </NavLink>
    </div>
  );
}
