import React from 'react'
import Message from './Message'

const MessageList = ({ messages }) => (
  <div>
  { messages.map(message => <Message key = { message.id }  subject={ message.subject } id={message.id} />) }
  </div>
)

export default MessageList
