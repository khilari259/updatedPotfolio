import React from 'react'
import { useEffect , useState } from 'react'
function Ido({animation}) {
    const [isVisible , setVisible] = useState(false)

    useEffect(()=> {
        if(animation) {
            setVisible(true);
        }
    },[animation])
    return (

        <div id='ido'   className={`${isVisible ? 'animate-fade-in' : ''} bg-blue-900 w-full h-screen flex flex-col justify-center items-center`}>
            <h1 className='text-center font-mono text-white text-4xl'>Things I Do</h1>
            <div className='flex flex-col md:flex-col sm:-flex-row justify-between'>
                <div className='w-96 m-4 font-serif text-white bg-blue-500 h-56 flex flex-col justify-center items-center '><img className='w-24 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkgsk-rL8iy88fkFv0bYS479ev3znMS5iqBX1seFzuYOKVb6ZPksDmw3gixtMidjgPMw&usqp=CAU" alt="error" />
                    <h2>Front-End</h2>
                    <h4 className='p-2'>Proficient frotend development with expericence in React to create responsive user interfaces, ensuirng a samless experience across device and browsers</h4>
                </div>
                <div className='w-96 m-4  text-white font-serif bg-blue-500 h-56 flex flex-col justify-center items-center '><img className='w-24 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkgsk-rL8iy88fkFv0bYS479ev3znMS5iqBX1seFzuYOKVb6ZPksDmw3gixtMidjgPMw&usqp=CAU" alt="error" />
                    <h2>Back-End</h2>
                    <h4 className='p-2'>Proficient in building backend APIs using Node.js and Express, with a focus on scalability and performance</h4>
                </div>
                <div className='w-96 m-4 font-serif text-white bg-blue-500 h-56 flex flex-col justify-center items-center '><img className='w-24 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkgsk-rL8iy88fkFv0bYS479ev3znMS5iqBX1seFzuYOKVb6ZPksDmw3gixtMidjgPMw&usqp=CAU" alt="error" />
                    <h4>Database</h4>
                    <h1 className='p-2'>Proficient in databse managment,ensuring data integrity and performance optimizing in relational and NoSQL databases</h1>
                </div>
            </div>

        </div>

    )
}

export default Ido