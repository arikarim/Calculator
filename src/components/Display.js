import React from 'react';

const Display = ({ result }) => <div>{result}</div>;

Display.defaultProps = {
  result: 0,
};
Display.propTypes = {
  result: String,
};

export default Display;
