import React from 'react'

const InputName = ({handleChange}) => (
  <input
    className='input-hello'
    placeholder='Type Your Name in Here! '
    onChange={handleChange}
  />
)

export default InputName
