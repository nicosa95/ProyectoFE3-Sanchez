import { useState } from 'react'
import ErrorList from './ErrorList'
import generateId from './Autoid.js'
export default function ContactForm() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [error, setError] = useState([])
  const [ok, setOk] = useState(false)

  const addError = newError => {
    setError(prevErrors => [
      ...prevErrors,
      { errorName: newError, id: generateId() }
    ])
  }
  function isMail(string) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return patron.test(string)
  }

  const validateForm = () => {
    let result = true
    setError([])

    if (name.trim().length < 5) {
      addError('The name has to have at least 5 characters')
      result = false
    }
    if (!isMail(mail)) {
      addError('This mail is not valid')
      result = false
    }
    setOk(result)
    return result
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validateForm()) {
      setOk(true)
      setMail('')
      setName('')
    }
  }

  const changeName = e => {
    setName(e.target.value)
  }

  const changeMail = e => {
    setMail(e.target.value)
  }

  return (
    <section className='section-form transition-element'>
      <h2>Please, send us a message so we can contact you </h2>

      <form onSubmit={handleSubmit}>
        {' '}
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={name} onChange={changeName} />
        <label htmlFor='mail'>Mail</label>
        <input type='text' id='mail' value={mail} onChange={changeMail} />
        <button type='submit'>Send</button>
        {ok && (
          <p className='ok transition-element'>
            An associate will contact you as son as possible
          </p>
        )}
        {error.length === 0 ? undefined : <ErrorList errors={error} />}
      </form>
    </section>
  )
}
