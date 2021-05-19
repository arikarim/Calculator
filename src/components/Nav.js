import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = () => (
  <Router>
    <ul className="d-flex">
      <Link to="/">Home</Link>
      <Link to="/Calculator">About</Link>
      <Link to="/Quotes">Quotes</Link>
    </ul>
  </Router>

);

Nav.propTypes = {

};

export default Nav;
