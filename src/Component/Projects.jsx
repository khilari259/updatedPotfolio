import React from 'react'
import geminiClone from '../assets/geimiclone.png'

function Projects() {
    return (
        <div id='project' className='animate-fade-in  w-full h-screen bg-blue-900 flex flex-col justify-center items-center gap-4 '>
            <h1 className="text-center font-serif text-xl font-bold text-red-500">Projects</h1>
            <div className='w-96 h-fit p-4 bg-blue-500 text-white '>
                <img src={geminiClone} alt="error" />
                <h1 className='p-2 font-serif'>Gemini Clone Frontend Project
                    The Gemini Clone Frontend is a web application designed to replicate the user interface and functionality of the Gemini cryptocurrency trading platform. It includes features like user-friendly navigation, responsive design, and visually appealing layouts for market data, charts, and account management. Built using modern frontend technologies like React, Tailwind CSS, or similar tools, it aims to deliver a seamless and intuitive user experience for trading and portfolio tracking.</h1>
                <button className='text-end w-full py-3'>
                    <a href="https://gemini-clone-sigma-lime.vercel.app/">Live</a>
                </button>
            </div>
        </div>
    )
}

export default Projects