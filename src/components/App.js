import React, { Component } from 'react'
import './App.css'
import MessageList from './MessageList'
import Toolbar from './Toolbar'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages}
    console.log('this.state: ', this.state)
  }

  render() {
    return (
      <div>
        <Toolbar />
        <MessageList
          messages={ this.state.messages }
        />
      </div>
    )
  }
}

export default App
