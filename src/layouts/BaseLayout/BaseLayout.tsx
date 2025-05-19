import type { ReactNode } from 'react';
import { AppBar } from '../../components/AppBar/AppBar';
import styles from './BaseLayout.module.css';
import { classNames } from '../../shared/utils/classNames';

export type BaseLayoutProps = {
  children?: ReactNode;
  className?: string;
};

export function BaseLayout({ children, className }: Readonly<BaseLayoutProps>) {
  return (
    <div className={classNames([styles['container'], className])}>
      <AppBar appName={'Name Generator'} />
      <main>{children}</main>
    </div>
  );
}
