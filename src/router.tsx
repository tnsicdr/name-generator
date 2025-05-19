import { createBrowserRouter } from 'react-router';
import { Home } from './screens/Home/Home';
import { Root } from './screens/Root/Root';
import { Project } from './screens/Project/Project';

const BASE = import.meta.env.BASE_URL;

export const router = createBrowserRouter([
  {
    path: BASE,
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'project', Component: Project },
    ],
  },
]);
