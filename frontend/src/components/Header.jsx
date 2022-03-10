import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Weather Aware</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>
            Dashboard
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header