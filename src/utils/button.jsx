import React from 'react'
import './style/button.css'
const Button = (props) => {
  return (
        <button onClick={() => {setPage((CurrentPage) = CurrentPage)}}>{props.title}</button>
  )
}

export default Button