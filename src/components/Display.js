import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => <input className="input text-end" value={result} />;

Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
