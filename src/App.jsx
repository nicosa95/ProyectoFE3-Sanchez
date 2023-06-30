import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Favs from './routes/Favs'
import Header from './components/Header'
import GlobalEntitiesProvider from './context/GlobalEntities'
import DentistId from './routes/DentistId'
import Footer from './components/Footer'

function App() {

  return (
    
    <>
      <GlobalEntitiesProvider>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Favs' element={<Favs />} />
            <Route path='/Dentis/:id' element={<DentistId />} />
          </Routes>
        </main>
        <Footer />
      </GlobalEntitiesProvider>
    </>
  )
  
}

export default App
