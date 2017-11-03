import React, { Component } from 'react'
import Toolbar from './Toolbar'
import MessageList from './MessageList'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }
  }

  toggleProperty(message, property) {
    const idx = this.state.messages.indexOf(message)
    this.setState({
      messages: [
        ...this.state.messages.slice(0, idx),
        { ...message, [property]: !message[property] },
        ...this.state.messages.slice(idx + 1)
      ]
    })
  }

  toggleSelect(message) {
    this.toggleProperty(message, 'selected')
  }

  toggleStar(message) {
    this.toggleProperty(message, 'starred')
  }

  markAsRead() {
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected ? { ...message, read: true } : message
      ))
    })
  }





  render() {
    return (
      <div>
        <Toolbar />
        <MessageList
          messages={ this.state.messages }
          markAsRead={ this.markAsRead.bind(this) }
          toggleSelect={ this.toggleSelect.bind(this) }
          toggleStar={ this.toggleStar.bind(this) }
        />
      </div>
    )
  }
}

export default App
