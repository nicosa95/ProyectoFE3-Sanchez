import { useContext, useState } from 'react'
import { GlobalEntities } from '../context/GlobalEntities'
import DentistList from '../components/home/DentistList'

export default function Home() {
  const [loading] = useState(false)
  const [title] = useState('')

  const { dentists } = useContext(GlobalEntities)

  return (
    <>
      <section className='home transition-element'>
        {console.log(dentists)}
        <h1>
          Check out our profesional staff{' '}
        </h1>
        {loading ? <p>loading...</p> : <p>{title}</p>}
        <DentistList />
      </section>
    </>
  )
}
