import { useState } from 'react'
import './../../App.css'
import { useSelector , useDispatch  } from 'react-redux'
import { updateTheme } from '../../Store/themeReducer'

const Navbar = () => {

  const [color, setColor] = useState(0)
  const dispatch = useDispatch();

const theme = useSelector((state) => state.theme);

console.log(theme)
  return (
<div className='box-container' style={{ background: theme }}>
      <div onClick={() => dispatch(updateTheme('red'))} className="red box"></div>
      <div onClick={() => dispatch(updateTheme('green'))} className="green box"></div>
      <div onClick={() => dispatch(updateTheme('blue'))} className="blue box"></div>
    </div>
  )
}

export default Navbar
