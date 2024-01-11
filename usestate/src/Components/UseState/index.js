import React, { useState } from 'react'

const UseStatePractice = () => {
    const [inputValue, setinputValue] = useState('DANISH')

function onChange(abc) {
    const newVal = abc.target.value
    setinputValue(newVal)
}

  return (
    <div>
        <h1>{inputValue}</h1>
      <input type='text' placeholder='Please Enter Any Value' value={inputValue} onChange={onChange}/> 
    </div>
  )
}

export default UseStatePractice
