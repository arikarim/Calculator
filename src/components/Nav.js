import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="d-flex py-3 justify-content-between">
    <h2 className="text-light">Math Magicians</h2>
    <ul>
      <Link exact className="link-danger fw-bolder text-decoration-none mx-4" to="/">Home</Link>
      <Link exact className="link-danger fw-bolder text-decoration-none mx-4" to="/Calculator">About</Link>
      <Link exact className="link-danger fw-bolder text-decoration-none mx-4" to="/Quotes">Quotes</Link>
    </ul>
  </div>
);

Nav.propTypes = {

};

export default Nav;
