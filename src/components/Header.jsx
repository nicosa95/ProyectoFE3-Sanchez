import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'
import { FaTooth } from 'react-icons/fa6'
export default function Header() {
  return (
    <header>
      <h1>
        <span className='title'> DH</span> CLINIC{' '}
        <span className='title'>
        </span>
      </h1>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/Contact'>Contact </Link>
        <Link to='/Favs'>Favorites </Link>
        <DarkMode />
      </nav>
    </header>
  )
}
