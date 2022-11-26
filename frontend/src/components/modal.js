import React from 'react'
import {Link} from 'react-router-dom';

const Backbutton = (props) => {
  return (
    <div className='Backbutton' onClick={props.onClick}>
        <Link to='/listbooks'><button className='newbtn'>Go Back</button></Link>
    </div>
  )
}

export default Backbutton;
