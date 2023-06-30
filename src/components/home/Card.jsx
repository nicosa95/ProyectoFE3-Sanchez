import userImage from '../../assets/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsHeartFill, BsHeart, BsInfoCircle } from 'react-icons/bs'

export default function Card(props) {
  const { dentist, isFav, handleFav } = props

  const navigate = useNavigate()

  const handleClick = () => {

    navigate(`/Dentis/${dentist.id}`) 
  }

  return (
    <li className='card' onClick={handleClick}>
      <img src={userImage} alt='User Avatar' />
      <p>
        <span className='title'>Name:</span> {dentist.name}
      </p>
      <hr></hr>
      <p>
        <span className='title'>User:</span> {dentist.username}
      </p>
      <hr></hr>
      <Link to={`/Dentis/${dentist.id}`}>
        <BsInfoCircle className='info' />
      </Link>
      {isFav ? (
        <BsHeartFill
          className='fav'
          onClick={e => {
            e.stopPropagation()
            handleFav(dentist)
          }}
        />
      ) : (
        <BsHeart
          className=''
          onClick={e => {
            e.stopPropagation() 
            handleFav(dentist)
          }}
        />
      )}
    </li>
  )
}
