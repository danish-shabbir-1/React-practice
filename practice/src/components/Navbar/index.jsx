import React, { useState, useEffect } from 'react'

const Navbar = (props) => {

const [isClicked, setIsClicked] = useState(false);
const [abc, setAbc] = useState(false);

// Initial stage

// useEffect(() => {
//   alert('Alert in use effect initail stage');
//   }, []);

// Updation stage

// useEffect(() => {
// alert('Alert in use effect updation stage '+isClicked);
// }, [isClicked]);

// UnMount stage

  return (
    <div>

<button onClick={() => setIsClicked(!isClicked)}>Is Clicked</button>
<button onClick={() => setAbc(!abc)}>abc</button>

    </div>
  )
}

export default Navbar
