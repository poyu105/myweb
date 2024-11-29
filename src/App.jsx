import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'

function App() {  
  return (
    <div>
      <Navbar/>
      <div className='text-md lg:mx-56 md:mx-36 sm:mx-16 mx-6 my-8 bg-slate-300'>
        <Home/>
        <About/>
        <Skill/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
