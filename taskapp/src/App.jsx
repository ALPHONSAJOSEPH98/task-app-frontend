
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'
import Home from './Pages/Home';

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes> 
      <Footer/>
      </>
    
  )
}

export default App
