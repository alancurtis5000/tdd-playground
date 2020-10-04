import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import AHeader from '../components/AHeader/AHeader';

import APage01 from '../pages/APage01/APage01';
import NotFound from '../pages/NotFound/NotFound';
import Landing from '../pages/Landing/Landing';
import StyleGuide from '../pages/StyleGuide/StyleGuide';

const Routes = withRouter(({ location }) => {
  return (
    <Switch location={location}>
      <Route path="/" exact component={APage01} />
      <Route path="/StyleGuide" component={StyleGuide} />
      <Route path="/Landing" component={Landing} />
      <Route path="/APage01" component={APage01} />
      <Route component={NotFound} />
    </Switch>
  );
});

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AHeader />
      <Routes />
    </BrowserRouter>
  );
};

export default AppRouter;
