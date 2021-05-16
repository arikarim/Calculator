import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => (
  <div>
    <div className="d-flex">
      <Button name="AC" handleClick={() => props.clickHandler('0')} />
      <Button name="+/-" handleClick={() => props.clickHandler('0')} />
      <Button name="%" handleClick={() => props.clickHandler('0')} />
      <Button name="/" handleClick={() => props.clickHandler('0')} />
    </div>
    <div className="d-flex">
      <Button name={7} handleClick={() => props.clickHandler('0')} />
      <Button name={8} handleClick={() => props.clickHandler('0')} />
      <Button name={9} handleClick={() => props.clickHandler('0')} />
      <Button name="X" handleClick={() => props.clickHandler('0')} />
    </div>
    <div className="d-flex">
      <Button name={4} handleClick={() => props.clickHandler('0')} />
      <Button name={5} handleClick={() => props.clickHandler('0')} />
      <Button name={6} handleClick={() => props.clickHandler('0')} />
      <Button name="-" handleClick={() => props.clickHandler('0')} />
    </div>
    <div className="d-flex">
      <Button name={1} handleClick={() => props.clickHandler('0')} />
      <Button name={2} handleClick={() => props.clickHandler('0')} />
      <Button name={3} handleClick={() => props.clickHandler('0')} />
      <Button name="+" handleClick={() => props.clickHandler('0')} />
    </div>
    <div className="d-flex">
      <Button name="0" handleClick={() => props.clickHandler('0')} />
      <Button name="." handleClick={() => props.clickHandler('0')} />
      <Button name="=" handleClick={() => props.clickHandler('0')} />
      <Button name="GO" handleClick={() => props.clickHandler('0')} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
