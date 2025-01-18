
import { useState } from 'react'
import Ido from './Component/Ido'
import Intro from './Component/Intro'
import Navbar from './Component/Navbar'
import Projects from './Component/Projects'
import Skills from './Component/Skills'

function App() {
  const [animation , setAnimation] = useState(false)
  const handleAnimation = () => {
      setAnimation(true)
      console.log("it trrigered");
      

  }

  

  return (
    <>
   <Navbar handleAnimation = {handleAnimation}/>
   <Intro/>
   <Ido animation={animation}/>
   <Skills/>
   <Projects/>
    </>
  )
}

export default App
