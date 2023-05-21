import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
  const componentDidMount = () => {
    document.querySelector('#check').checked = false
  }

  return (
    <div>
      <nav>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
          <i className='fas fa-bars' />
        </label>
        <label className='logo'><Link to='/'>Youtube<img className='logo-image' src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt='' /></Link></label>
        <ul>
          <li><Link className='nav-options' to='/' onClick={componentDidMount}><i className='fa-solid fa-house' />Home</Link></li>
        </ul>
      </nav>
    </div>
  )
}
