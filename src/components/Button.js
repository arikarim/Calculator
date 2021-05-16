import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (
  <div>
    <button
      value={name}
      onClick={() => handleClick(name)}
      type="button"
      className="py-2 px-3 button1"
    >
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: undefined,
};

export default Button;
