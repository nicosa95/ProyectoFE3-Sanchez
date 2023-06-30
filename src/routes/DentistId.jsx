import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function DentistId() {
  const navigate = useNavigate()
  const params = useParams()
  const [dentist, setDentist] = useState()
  const [loading, setLoading] = useState(true)

  const returnToDentists = () => {
    navigate(-1)
  }

  async function getDentist() {
    setLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    )
    const data = await response.json()
    setDentist(data)
    setLoading(false)
  }
  useEffect(() => {
    getDentist()
  }, [])

  return (
    <section className='section-dentist'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Proffesional {dentist.id} </h1>
          <article>
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
            <p>ID: {dentist.id}</p>
          </article>
        </>
      )}
      <button onClick={returnToDentists}>
        Return to dentists
      </button>
    </section>
  )
}
