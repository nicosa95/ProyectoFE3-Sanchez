import userImage from '../../assets/user.png'

import { BsFillTrashFill } from 'react-icons/bs'
export default function Card(props) {
  const { dentistFav, deleteDentistFav } = props

  return (
    <li className='card '>
      <img src={userImage} alt='User Avatar' />
      <p>
        <span className='title'>Name:</span> {dentistFav.name}
      </p>
      <hr></hr>
      <p>
        <span className='title'>User:</span> {dentistFav.username}
      </p>
      <hr></hr>
      <BsFillTrashFill
        className='delete'
        onClick={() => deleteDentistFav(dentistFav)}
      />
    </li>
  )
}
