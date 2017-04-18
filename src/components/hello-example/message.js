import React from 'react'
import PropTypes from 'prop-types'

const Message = ({name}) => (
  <h2 className='msg'>
    Olá {name || 'Desconhecido'}!
  </h2>
)

Message.propTypes = {
  name: PropTypes.string
}

export default Message
