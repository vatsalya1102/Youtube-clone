import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../images/Youtube_logo.png'

export default function Navbar () {

  return (
    <div>
      <nav>
        <label className='logo'><Link to='/'>Youtube<img className='logo-image' src={Logo} alt='' /></Link></label>
      </nav>
    </div>
  )
}
