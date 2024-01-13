import React, { useState } from 'react'
import PropsPractice from '../Props'

const UseStatePractice = (props) => {
  console.log(props);
    const [inputValue, setinputValue] = useState('DANISH')

function onChange(abc) {
    const newVal = abc.target.value
    setinputValue(newVal)
}

  return (
    <div>
      {props.h1}
        <h1>{inputValue}</h1>
      <input type='text' placeholder='Please Enter Any Value' value={inputValue} onChange={onChange}/> 
    </div>
  )
}

export default UseStatePractice
