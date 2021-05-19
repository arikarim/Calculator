import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quotes from './Quotes';

const Routes = () => (
  <BrowserRouter>
    <h1 className="my-5 text-light">Math Magicians</h1>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/Quotes" component={Quotes} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
