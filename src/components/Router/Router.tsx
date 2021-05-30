import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from './router.config';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map((route) => {
          const { path, props, key } = route;
          return <Route key={key} path={path} {...props} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
