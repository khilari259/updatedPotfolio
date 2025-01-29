
import { useState } from 'react'
import Ido from './Component/Ido'
import Intro from './Component/Intro'
import Navbar from './Component/Navbar'
import Projects from './Component/Projects'
import Skills from './Component/Skills'
import HamburgerMenu from './Component/HamburgerMenu'

function App() {
  const [animation , setAnimation] = useState(false)
  const handleAnimation = () => {
      setAnimation(true)
      console.log("it trrigered");
      

  }

  

  return (
    <>
    <HamburgerMenu/>
   <Navbar handleAnimation = {handleAnimation}/>
   <Intro/>
   <Ido animation={animation}/>
   <Skills/>
   <Projects/>
    </>
  )
}

export default App
