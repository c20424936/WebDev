import React from 'react'

const Backbutton = (props) => {
  return (
    <div className='Backbutton' onClick={props.onClick}>
        <button className='newbtn'>Go Back</button>
    </div>
  )
}

export default Backbutton;
