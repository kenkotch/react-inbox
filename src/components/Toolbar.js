import React from 'react'

const Toolbar = ({
  messages,
  markAsRead,
  markAsUnread
}) => {

  const selectedCount = messages.filter(message => message.selected).length
  // console.log('selectedCount: ', selectedCount)
  // const unreadCount = messages.filter(message => !message.read).length
  //
  // switch (selectedCount) {
  //   case 0:
  //     selectAllClass = 'fa-square-o'
  //     break
  //   case messages.length:
  //     selectAllClass = 'fa-check-square-o'
  //     break
  //   default:
  //     selectedClass = 'fa-minus-square-o'
  // }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button className="btn btn-default">
          <i className="fa fa-square-o"></i>
        </button>

        <button className="btn btn-default" onClick={ markAsRead } disabled={ selectedCount === 0 }>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={ markAsUnread } disabled={ selectedCount === 0 }>
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled="disabled">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled="disabled">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled="disabled">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar
