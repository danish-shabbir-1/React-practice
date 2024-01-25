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
{/* <button onClick={() => setIsClicked(!isClicked)}>Is Clicked</button>
<button onClick={() => setAbc(!abc)}>abc</button> */}

{/* Navbar start here */}

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Serive</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



{/* Navbar start here */}
    </div>
  )
}

export default Navbar
