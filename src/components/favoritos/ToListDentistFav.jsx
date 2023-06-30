import { useState } from 'react'
import Card from './Card'
import { GiWolfHead, GiWerewolf } from 'react-icons/gi'
import { BsFillSlashCircleFill } from 'react-icons/bs'

export default function ToListDentistFav() {
  const [dentistsFav, setDentistsFav] = useState(
    JSON.parse(localStorage.getItem('dentistsFav') || '[]')
  )

  function deleteDentistFav(dentistToDelete) {
    const newFavs = dentistsFav.filter(
      dentist => dentist.id !== dentistToDelete.id
    )

    setDentistsFav(newFavs)
    localStorage.setItem(
      'dentistsFav',
      JSON.stringify(newFavs)
    )
  }
  return (
    <>
      {dentistsFav.length === 0 ? (
        <h1>
          You have not mark anyone as Fav{' '}
            <section className='not-found transition-element'>
            <BsFillSlashCircleFill />
          </section>
        </h1>
      ) : (
        <h1 className='sin-no-fav'>
          This are you favourite dentists{' '}
        </h1>
      )}

      <section className='section-cards-favoritos transition-element'>
        <ul className='covers'>
          {dentistsFav.map(dentistFav => (
            <Card
              key={dentistFav.id}
              dentistFav={dentistFav}
              deleteDentistFav={deleteDentistFav}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
