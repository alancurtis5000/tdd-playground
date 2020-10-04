import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

import APage01 from '../pages/APage01';
import NotFound from '../pages/NotFound';
import Landing from '../pages/Landing';
import StyleGuide from '../pages/StyleGuide';
import CounterPage from '../pages/CounterPage';

const Routes = withRouter(({ location }) => {
  return (
    <Switch location={location}>
      <Route path="/" exact component={CounterPage} />
      <Route path="/CounterPage" component={CounterPage} />
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
      <Header />
      <Sidebar />
      <Footer />
      <div className="content">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
