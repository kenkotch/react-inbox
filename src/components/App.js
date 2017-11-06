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

  toggleSelectAll() {
    const selectedMessages = this.state.messages.filter(message => message.selected)
    const selected = selectedMessages.length !== this.state.messages.length

    this.setState({
      messages: this.state.messages.map(message => (
        message.selected !== selected ? { ...message, selected } : message
      ))
    })
  }

  deleteMessages() {
    const messages = this.state.messages.filter(message => !message.selected)
    this.setState({ messages })
  }

  applyLabel(label) {
    const messages = this.state.messages.map(message => (
      message.selected && !message.labels.includes(label) ? { ...message, labels: [...message.labels, label].sort() } : message
    ))
  this.setState({ messages })
  }

  removeLabel(label) {
    const messages = this.state.messages.map(message => {
      const idx = message.labels.indexOf(label)

      if (message.selected && idx >= 0) {
        return {
          ...message, labels : [
            ...message.labels.slice(0, idx),
            ...message.labels.slice(idx + 1)
          ]
        }
      }
      return message
    })
    this.setState({ messages })
  }

  render() {
    return (
      <div className='container'>
        <Toolbar
          messages={ this.state.messages }
          markAsRead={ this.markAsRead.bind(this) }
          markAsUnread={ this.markAsUnread.bind(this) }
          toggleSelectAll={ this.toggleSelectAll.bind(this) }
          deleteMessages={ this.deleteMessages.bind(this) }
          applyLabel={ this.applyLabel.bind(this) }
          removeLabel={ this.removeLabel.bind(this) }
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
