import React from 'react'
import Message from './Message'

const MessageList = ({
  messages,
  toggleSelected,
  toggleStar
}) => {
  const messageComp = messages.map(message => (
    <Message
      key={ message.id }
      message={ message }
      toggleSelected={ toggleSelected }
      toggleStar={ toggleStar }
    />
  ))

  return (
    <div>
      { messageComp }
    </div>
  )



}

export default MessageList
