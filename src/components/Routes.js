import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quotes from './Quotes';
import Nav from './Nav';

const Routes = () => (
  <BrowserRouter>
    <div className="">
      <Nav />
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Calculator" component={App} />
      <Route path="/Quotes" component={Quotes} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
