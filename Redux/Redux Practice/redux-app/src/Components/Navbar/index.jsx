import React, { useState } from 'react'
import './../../App.css'
import { UseSelector, useSelector } from 'react-redux'

const Navbar = () => {

  const [color, setColor] = useState(0)

  const theme = useSelector(state => state.theme)

  return (
    <div className='box-container' style={{background : theme}}>
      <div onClick={() => setColor(0)} className="red box"></div>
      <div onClick={() => setColor(1)} className="green box"></div>
      <div onClick={() => setColor(2)} className="blue box"></div>
    </div>
  )
}

export default Navbar
