import React from 'react'

const Message = ({
  message,
  toggleSelect,
  toggleStar
}) => {

  const selectedClass = message.selected ? 'selected' : ""
  const starClass = message.starred ? 'fa-star' : 'fa-star-o'
  const readClass = message.read ? 'read' : 'unread'

  return (
    <div className={ `row message unread ${ selectedClass }` } onClick={ () => toggleSelect(message) }>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox"
            checked={ !!message.selected }
            readOnly={ true }
          />
        </div>
        <div className="col-xs-2">
          <i className="star fa fa-star-o"></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      <a href="#">
        { message.subject }
      </a>
    </div>
  </div>
  )
}

export default Message
