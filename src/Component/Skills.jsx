import React from 'react'
import Lottie from 'lottie-react';
import jsIcon from '../assets/icons8-javascript-48.png';
import ReactLogo from '../assets/icons8-react.json'
import nodeJsVideo from '../assets/NodeJs Icon Library.mp4'
import talwindVideo from '../assets/Tailwind Css.mp4'
import MongoDB from '../assets/MongoDB Database.mp4'

function Skills() {
    return (
        <>
            <div id="skills" className='animate-fade-in w-full h-screen bg-blue-900 flex flex-col justify-center items-center gap-3'>
                <h1 className='text-center font-serif text-xl font-bold text-red-500'>My Skillset</h1>
                <div className=' flex justify-center flex-col md:flex-row lg:flex-row items-center gap-4'>
                    <div className='w-96 h-48 bg-black text-white font-serif flex flex-col justify-center items-center '>
                        <img src={jsIcon} alt="error" />
                        <h4>javascript</h4>
                    </div>
                    <div className='w-96 h-48 bg-black text-white font-serif flex flex-col justify-center items-center'>
                        <Lottie animationData={ReactLogo} loop={true} />
                        <h4>React</h4>
                    </div>
                </div>
                <div className='flex justify-center flex-col md:flex-row lg:flex-row items-center gap-4'>
                    <div className='w-96 h-48 bg-black text-white font-serif flex flex-col justify-center items-center '>
                        <video
                            src={talwindVideo}
                            autoPlay
                            loop
                            muted
                            className="w-full h-9 object-cover"
                        ></video>
                        <h4>TailwindCSS</h4>
                    </div>
                    <div className='w-96 h-48 bg-black text-white font-serif flex flex-col justify-center items-center gap-1'>
                        <video
                            src={nodeJsVideo}
                            autoPlay
                            loop
                            muted
                            className="w-12 h-9 object-cover"
                        ></video>
                        <h4>Node.js</h4>
                    </div>
                </div>
                <div>
                    <div className='w-96 h-48 bg-black text-white font-serif flex flex-col justify-center items-center gap-1'>
                        <video
                            src={MongoDB}
                            autoPlay
                            loop
                            muted
                            className="w-16 h-10 object-cover"
                        ></video>
                        <h4>MongoDB</h4>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Skills