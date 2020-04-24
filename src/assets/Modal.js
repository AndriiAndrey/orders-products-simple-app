import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)
  const [title, setTitle] = useState(false)
  const [order, setOrder] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      togleModal: (str, order) => openClose(str, order)
    }
  })

  const openClose = (str, order) => {
    setDisplay(!display)
    setTitle(str)
    setOrder(order)
  }

  if (display) {
    return ReactDOM.createPortal(
      <div className="pop-up-container">

        <div className="pop-up-window">
          <div className="pop-up-title">
            <h4>{title}</h4>
            <div className="close-icon" onClick={openClose}>X</div>
          </div>
          <div className="pop-up-body">
            {order.title}
          </div>
          <div className="pop-up-buttons">
            <button className="pop-up-cancel-button" onClick={openClose}>CANCEL</button>
            <button className="pop-up-delete-button" onClick={() => alert('delete')}>DELETE</button>
          </div>
        </div>

      </div>, document.getElementById('modal-root'))
  }

  return null
})

export default Modal
