import React from 'react'
import img from '../assets/images/profile-icon-design-free-vector.jpg'

function Intro() {
    return (
        <>
            <div id='intro' className='animate-fade-in flex flex-row bg-blue-900 gap-5   py-16 '>
                <div className="inro flex flex-row items-center  ">

                    <div className="p-5 rounded-full overflow-visible  ">
                        <img
                            className="h-40 w-40 rounded-full object-cover"
                            src={img}
                            alt="error"
                        />
                    </div>
                    <div>
                        <h4 className='font-serif font-bold text-white '>Hey there,I'm</h4>
                        <h6 className='font-serif text-5xl text-white'>Sumit sur</h6>
                        <div className=' flex gap-2 text-white '>
                            <a href="#">Resume</a>
                            <a href="#">in</a>
                            <a href="#">git</a>
                        </div>

                    </div>
                </div>





            </div>
            <div className=" animate-fade-in text  flex flex-row md:flex-col sm:flex-col   bg-blue-900 gap-4  justify px-28 font-serif font-semibold text-white h-auto  md:h-screen lg:h-screen">
            I am Sumit, motivated and detail-oriented Full Stack Developer specializing in React.js for front-end development, creating responsive and user-friendly interfaces. Proficient in backend technologies, including Node.js and Express, for building robust and scalable server-side applications. Experienced in working with MongoDB as the database to design, manage, and optimize data structures. Passionate about crafting seamless and efficient full-stack solutions that meet business objectives and enhance user experiences. Eager to contribute to dynamic teams and deliver high-quality software solutions.
                <div className="logo">
                    {/* <img
                        src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
                        alt="error"
                        className="w-max h-40"
                    /> */}
                </div>

            </div>
        </>
    )
}

export default Intro