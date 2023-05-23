import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {

  return (
    <div>
      <nav>
        <label className='logo'><Link to='/'>Youtube<img className='logo-image' src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt='' /></Link></label>
      </nav>
    </div>
  )
}
