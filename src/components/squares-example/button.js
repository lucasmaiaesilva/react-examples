import React from 'react'

const Button = ({color, text, handleClick}) => (
  <button
    style={{
      backgroundColor: color
    }}
    className='color-button'
    onClick={handleClick}>
    {text}
  </button>
)

export default Button
