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

  markAsUnread() {
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected ? { ...message, read: false } : message
      ))
    })
  }

  deleteMessages() {
    const messages = this.state.messages.filter(message => !message.selected)
    this.setState({ messages })
  }

  toggleSelectAll() {
    const selectedMessages = this.state.messages.filter(message => message.selected)
    const selected = selectedMessages.length !== this.state.messages.length

    this.setState({
      messages: this.state.messages.map(message => (
        message.selected !== selected ? { ...message, selected } : message
      ))
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <Toolbar
            messages={ this.state.messages }
            markAsRead={ this.markAsRead.bind(this) }
            markAsUnread={ this.markAsUnread.bind(this) }
            deleteMessages={ this.deleteMessages.bind(this) }
            toggleSelectAll={ this.toggleSelectAll.bind(this) }
            />
          <MessageList
            messages={ this.state.messages }
            toggleSelect={ this.toggleSelect.bind(this) }
            toggleStar={ this.toggleStar.bind(this) }
            />
        </div>
      </div>
    )
  }
}

export default App
