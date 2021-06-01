import Index from '@src/pages/index';
import Board from '@src/pages/board';

export interface Route {
  path: string;
  key: string;
  props?: unknown;
}

export const ROUTES: Route[] = [
  {
    path: '/',
    key: 'index',
    props: {
      exact: true,
      component: Index
    }
  },
  {
    path: '/board',
    key: 'board',
    props: {
      component: Board
    }
  }
];
