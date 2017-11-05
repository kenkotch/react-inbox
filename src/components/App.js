import React, { Component } from 'react'
import './App.css'
import Toolbar from './Toolbar'
import MessageList from './MessageList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }
  }



  render() {
    return (
      <div className="container">
        <Toolbar />
        <MessageList messages={ this.state.messages }/>
      </div>
    )
  }
}

export default App
