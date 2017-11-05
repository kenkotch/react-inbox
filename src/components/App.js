import React, { Component } from 'react'
import MessageList from './MessageList'
import Toolbar from './Toolbar'
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

  toggleSelected(message) {
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

  markAsUnread() {
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected ? { ...message, read: false } : message
      ))
    })
  }

  render() {
    return (
      <div className='container'>
        <Toolbar
          messages={ this.state.messages }
          markAsRead={ this.markAsRead.bind(this) }
          markAsUnread={ this.markAsUnread.bind(this) }
        />
        <MessageList
          messages={ this.state.messages }
          toggleSelected={ this.toggleSelected.bind(this) }
          toggleStar={ this.toggleStar.bind(this) }
        />
      </div>
    )
  }
}

export default App
