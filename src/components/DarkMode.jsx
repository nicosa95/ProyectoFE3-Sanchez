import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { useContext } from 'react'
import { GlobalEntities } from '../context/GlobalEntities'

export default function DarkMode() {
  const { mode, changeMode } = useContext(GlobalEntities)

  {
    console.log(mode)
  }

  return (
    <>
      <button onClick={changeMode}>
        {mode === 'light' ? (
          <BsFillBrightnessHighFill />
        ) : (
          <BsFillMoonStarsFill />
        )}
      </button>
    </>
  )
}
