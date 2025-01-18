import React from 'react'



function Navbar({handleAnimation}) {
 
  const handelScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="bg-black w-full flex h-16 sticky top-0">
      <nav className="flex flex-row  items-center justify-end w-full cursor-pointer">
        <a onClick={() => handelScroll('intro')} className="px-4 text-white hover:text-gray-400">Intro</a>
       <a onClick={() => { handleAnimation(); handelScroll('ido')}}  className="px-4 text-white hover:text-gray-400">I do</a> 
        <a onClick={() => handelScroll('skills')} className="px-4 text-white hover:text-gray-400">Skills</a>
        <a onClick={() => handelScroll('project')} className="px-4 text-white hover:text-gray-400">Projects</a>
      </nav>
    </div>
  )
}

export default Navbar