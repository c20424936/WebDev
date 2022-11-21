import React,{useState} from 'react'

const LoginButton = ({colour,text}) => {

   
    return (
        <div className="buttons">
        <button 
        style={{backgroundColor: colour}}
        className = 'btn'>
        {text}
        </button>
        </div>
    )
}

export default LoginButton;