import React from 'react'

const Modal = (props) => {
  return (
    <div className='modal' onClick={props.onClick}>
        
        <button className='btn'>Go Back</button>
    </div>
  )
}

export default Modal;
