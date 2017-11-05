import React from 'react'

const Message = ({
  message,
  toggleSelected,
  toggleStar
}) => {

const selectedClass = message.selected ? 'selected' : ''
const starClass = message.starred ? 'fa-star' : 'fa-star-o'

const starMessage = (e) => {
  e.stopPropagation()
  toggleStar(message)
}

  return (
    <div className={`row message unread ${ selectedClass }`} onClick={ () => toggleSelected(message) }>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox"
          checked={ !!message.selected }
          readOnly={ true }
        />
      </div>
      <div className="col-xs-2" onClick={ starMessage }>
        <i className={`star fa ${ starClass }`}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="/">
      { message.subject }
    </a>
  </div>
</div>
  )
}

export default Message
