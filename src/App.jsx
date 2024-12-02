import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Protfolio from './pages/Protfolio'

function App() {  
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <div className='lg:text-lg md:text-base text-sm lg:mx-56 md:mx-36 sm:mx-16 mx-6 my-8 text-slate-200 overflow-y-scroll'>
        <Home/>
        <About/>
        <Skill/>
        <Protfolio/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
