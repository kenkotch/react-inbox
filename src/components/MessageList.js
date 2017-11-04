import React from 'react'
import Message from './Message'

const MessageList = ({
  messages,
  toggleSelect,
  toggleStar
}) => {
  const messageComp = messages.map(message => <Message
    key={ message.id }
    message={ message }
    toggleSelect={ toggleSelect }
    toggleStar={ toggleStar }
  />)




  return (
    <div>
      { messageComp }
    </div>
  )

}

export default MessageList
