import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './router.config';

const Router: React.FC = () => {
  return (
    <Switch>
      {ROUTES.map((route) => {
        const { path, props, key } = route;
        console.log('key', key);
        return <Route key={key} path={path} {...props} />;
      })}
    </Switch>
  );
};

export default Router;
