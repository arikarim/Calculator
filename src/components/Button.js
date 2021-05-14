import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div>
    <button type="button" className="py-2 px-3 button1">{name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
