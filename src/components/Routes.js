import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quotes from './Quotes';
import Nav from './Nav';

const Routes = () => (
  <BrowserRouter>
    <div className="d-flex justify-content-end">
      <Nav />
    </div>
    <h1 className="text-light">Math Magicians</h1>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Calculator" component={App} />
      <Route path="/Quotes" component={Quotes} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
