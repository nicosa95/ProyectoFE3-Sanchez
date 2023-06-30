/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'

export const GlobalEntities = createContext({})

export default function GlobalEntitiessProvider(props) {
  const { children } = props
  const [dentists, setDentists] = useState([])

  const [mode, setMode] = useState('dark')

  async function getDentists() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setDentists(response)
  }

  function changeMode() {
    const root = document.documentElement
    if (mode === 'light') {
      root.classList.remove('dark')
      setMode('dark')
    } else {
      root.classList.add('dark')

      setMode('light')
    }
  }

  const globalValues = {
    dentists,
    mode,
    changeMode
  }

  useEffect( () => {
    getDentists()
  }, [])

  return (
    <GlobalEntities.Provider value={globalValues}>
      {children}
    </GlobalEntities.Provider>
  )
}
