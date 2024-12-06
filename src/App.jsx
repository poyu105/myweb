import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function App() {  
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <div className='lg:text-lg md:text-base text-sm lg:mx-44 md:mx-24 sm:mx-16 mx-6 sm:my-3 my-0 text-slate-200 overflow-y-scroll'>
        <Home/>
        <About/>
        <Skill/>
        <Portfolio/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
