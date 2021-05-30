import Index from '@src/pages/index';

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
  }
];
