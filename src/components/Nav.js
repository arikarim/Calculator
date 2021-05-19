import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul className="d-flex py-3">
    <Link exact className="link-light text-decoration-none mx-4" to="/">Home</Link>
    <Link exact className="link-light text-decoration-none mx-4" to="/Calculator">About</Link>
    <Link exact className="link-light text-decoration-none mx-4" to="/Quotes">Quotes</Link>
  </ul>
);

Nav.propTypes = {

};

export default Nav;
