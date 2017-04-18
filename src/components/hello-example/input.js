import React from 'react'
import PropTypes from 'prop-types'

const InputName = ({handleChange}) => (
  <input
    className='input-hello'
    placeholder='Type Your Name in Here! '
    onChange={handleChange}
  />
)

InputName.propTypes = {
  handleChange: PropTypes.func
}

export default InputName
