/* eslint-disable */
import React from 'react';
import PropTypes, { string } from 'prop-types';

const Display = (props) => <div>{props.result}</div>;

Display.defaultProps = {
  result: 0,
};
Display.PropTypes = {
  result: string,
}

export default Display;
