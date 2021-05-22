import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/Nav';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <h1>Math Magicians</h1>
        <h6 className="title">Welcome to our page!</h6>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
