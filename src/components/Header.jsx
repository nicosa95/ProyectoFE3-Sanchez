import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'
export default function Header() {
  return (
    <header>
      <h1>
        <span className='title'> DH</span> CLINIC{' '}
        <span className='subtitle'>Since 2023</span>
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
