import React from 'react'
import { useState } from 'react'
import menuIcon from '../assets/images/menu.png.png'
function HamburgerMenu() {
    const [open, setOpen] = useState(true)
    const handleMenu = () => {
        setOpen(!open)
        console.log(open);
    }
    const handelScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            {
                open ? (
                    <div className="menu  sm:hidden flex size-10 w-full justify-end bg-black"><img onClick={handleMenu} src={menuIcon} alt="error" /></div>
                ) : (

                    <div onClick={handelScroll} >
                        <ul className=' sm:hidden flex flex-col w-full text-end gap-2 bg-black text-white font-serif'>
                            <a onClick={() => handelScroll('intro')} className="px-4 text-white hover:text-gray-400">Intro</a>
                            <a onClick={() => { handelScroll('ido') }} className="px-4 text-white hover:text-gray-400">I do</a>
                            <a onClick={() => handelScroll('skills')} className="px-4 text-white hover:text-gray-400">Skills</a>
                            <a onClick={() => handelScroll('project')} className="px-4 text-white hover:text-gray-400">Projects</a>
                        </ul>
                    </div>

                )


            }



        </div>
    )
}

export default HamburgerMenu