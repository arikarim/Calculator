import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/Home';
import Quotes from '../components/Quotes';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Calculator" component={App} />
            <Route path="/Quotes" component={Quotes} />
          </Switch>
        </BrowserRouter>
        <h1>Math Magicians</h1>
        <h6 className="title">Welcome to our page!</h6>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
