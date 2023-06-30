import { useContext, useState } from 'react'
import { GlobalEntities } from '../../context/GlobalEntities'
import Card from './Card'

export default function DentistsList() {
  const { dentists } = useContext(GlobalEntities)

  const [dentistsFav, setDentistsFav] = useState(
    JSON.parse(localStorage.getItem('dentistsFav') || '[]')
  )

  function addDentistFav(addDentist) {
    
    if (
      !dentistsFav.some(
        dentistFav => dentistFav.id === addDentist.id
      )
    ) {
      
      const newFavs = [...dentistsFav, addDentist]
      setDentistsFav(newFavs)
      localStorage.setItem(
        'dentistsFav',
        JSON.stringify(newFavs)
      )
    }
  }

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

  const handleFav = dentist => {
    if (isFav(dentist)) {
      deleteDentistFav(dentist)
    } else {
      addDentistFav(dentist)
    }
  }

  const isFav = dentist => {
    return dentistsFav.some(
      dentistFav => dentistFav.id === dentist.id
    )
  }

  return (
    <section className='section-cards'>
      <ul className='covers'>
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            dentist={dentist}
            handleFav={handleFav}
            isFav={isFav(dentist)}
          />
        ))}
      </ul>
    </section>
  )
}
