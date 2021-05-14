/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const ButtonPanel = props => {
  return (
    <div>
      <div className='d-flex'>
        <Button name={'AC'} />
        <Button name={'+/-'} />
        <Button name={'%'} />
        <Button name={'/'} />
      </div>
      <div className='d-flex'>
        <Button name={7} />
        <Button name={8} />
        <Button name={9} />
        <Button name={'X'} />
      </div>
      <div className='d-flex'>
        <Button name={4} />
        <Button name={5} />
        <Button name={6} />
        <Button name={'-'} />
      </div>
      <div className='d-flex'>
        <Button name={1} />
        <Button name={2} />
        <Button name={3} />
        <Button name={'+'} />
      </div>
      <div className='d-flex'>
        <Button name={0} />
        <Button name={"."} />
        <Button name={'='} />
      </div>
    </div>
  )
}

ButtonPanel.propTypes = {

}

export default ButtonPanel
