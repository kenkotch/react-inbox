import React from 'react'
import Message from './Message'

const MessageList = ({ messages }) => {
  const messageComp = messages.map(message => <Message
    key={ message.id }
    message={ message }

  />)




  return (
    <div>
      { messageComp }
    </div>
  )
}

export default MessageList
