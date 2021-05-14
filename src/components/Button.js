/* eslint-disable */
import React from 'react'
import PropTypes, { string } from 'prop-types'

const Button = props => {
  return (
    <div>
      <button className='py-2 px-3 button1'>{props.name}</button>
    </div>
  )
}

Button.propTypes = {
  name: string,
}

export default Button
