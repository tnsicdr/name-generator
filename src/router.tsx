import { createBrowserRouter } from 'react-router';
import { Home } from './screens/Home/Home';
import { Root } from './screens/Root/Root';
import { Project } from './screens/Project/Project';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'project', Component: Project },
    ],
  },
]);
