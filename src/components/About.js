import Pdf from '../components/Header/Majano_Resume_2021.pdf'
import React from 'react';
import './info.css'


function About() {
 
        return(
            <section id ='About'>
                <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>Hi, I'm Javier
                    <br/>
                    I am a student
                    </h1>
                    <p>Hello, I’m Javier Majano, and I’m a student at CUNY John Jay in Manhattan looking ready to graduate in May 2022. 
                        I’m also a student in CUNy TECH prep, which is available for CUNY students, 
                        and it’s where we learn in-demand skills for full-stack development technologies.</p>
                        <div className='flext justify-center'>
                        <a href={Pdf} target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" >
                            See My Resume
                        </a>
                        </div>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="me object-cover object-center rounded" alt="Myself" src="./Javier.jpg"/>
                </div>
                </div>
            </section>
        )
        
}

export default About