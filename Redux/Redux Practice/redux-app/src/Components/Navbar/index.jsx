import { useState } from 'react'
import './../../App.css'
import { useSelector , useDispatch  } from 'react-redux'

const Navbar = () => {

  const [color, setColor] = useState(0)
  const dispatch = useDispatch();

const theme = useSelector((state) => state.theme);

  return (
<div className='box-container' style={{ background: theme }}>
      <div onClick={() => dispatch(setColor(0))} className="red box"></div>
      <div onClick={() => dispatch(setColor(1))} className="green box"></div>
      <div onClick={() => dispatch(setColor(2))} className="blue box"></div>
    </div>
  )
}

export default Navbar
