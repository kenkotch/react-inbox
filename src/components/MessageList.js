import React from 'react'
import Message from './Message'

const MessageList = ({
  messages,
  toggleSelect,
  toggleStar
}) => (
    <div>
      { messages.map(message => <Message
        key={ message.id }
        message={ message }
        toggleSelect={ toggleSelect }
        toggleStar={ toggleStar }
      />)}
    </div>
  )

export default MessageList
