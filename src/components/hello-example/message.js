import React from 'react'

const Message = ({name}) => (
  <h2 className='msg'>
    Olá {name || 'Desconhecido'}!
  </h2>
)

export default Message
