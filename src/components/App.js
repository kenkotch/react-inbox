import React, { Component } from 'react'
import './App.css'
import Message from './Message'
import MessageList from './MessageList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages}
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <MessageList
          messages={ this.state.messages }
        />
      </div>
    )
  }
}

export default App
