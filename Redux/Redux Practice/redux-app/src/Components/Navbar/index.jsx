import './../../App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateTheme } from '../../Store/themeReducer'

const Navbar = () => {

  
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  
  // console.log(theme);

  return (
<div className='box-container' style={{background : theme}}>
      <div onClick={() => dispatch(updateTheme('red'))} className="red box"></div>
      <div onClick={() => dispatch(updateTheme('green'))} className="green box"></div>
      <div onClick={() => dispatch(updateTheme('blue'))} className="blue box"></div>
    </div>
  )
}

export default Navbar
