import React from 'react'
import Message from './Message'

const MessageList = ({
  messages,
  toggleSelected
}) => {
  const messageComp = messages.map(message => (
    <Message
      key={ message.id }
      message={ message }
      toggleSelected={ toggleSelected }
    />
  ))

  return (
    <div>
      { messageComp }
    </div>
  )



}

export default MessageList
