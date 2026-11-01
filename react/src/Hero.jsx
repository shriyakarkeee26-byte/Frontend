
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom'
function Hero() {
    return (
        <div className='flex min-h-screen sm:flex-row flex-col-reverse gap-4 items-center justify-between m-4'>

            {/* left content */}
            <div className='sm:max-w-4xl flex flex-col gap-4 sm:px-20 px-4'>

                {/* text contents */}
                <div className='flex flex-col gap-4 text-center'>

                    <h1 className='text-green-400 uppercase font-bold sm:text-2xl'>
                        Shriya Karki
                    </h1>

                    <h2 className='text-xl text-green-300 font-semibold'>
                        Full Stack Developer
                    </h2>

                    <p className='text-gray-600 leading-8 text-justify text-sm sm:text-[15px]'>
                        I build intelligent, secure, and scalable web and mobile applications by combining modern software engineering, AI integration and efficient system design. I specialize in transforming complex ideas into user-friendly, high-performance digital solutions using modern web and app technologies. My focus is on developing innovative, reliable, and future-ready applications that deliver seamless user experiences and strong security.
                    </p>

                </div>

                {/* buttons */}
                <div className='flex gap-4 justify-center'>
<a href="Shriyacv.pdf" download>
                    <button className='bg-green-400 text-white py-7 px-3 rounded hover:bg-green-500 transition duration-300 ease-in-out'>
                        Download CV
                    </button>
</a>
<Link to="/projects">
                    <button className='bg-white text-green-400 py-3 px-7 rounded border border-green-400 hover:bg-green-100 transition ease-in-out hover:scale-105 duration-500'>
                        View Projects
                    </button>
</Link>
                </div>

                <div className='flex flex-col text-center justify-center'>
                    <h1 className='text-green-500 text-xl'>Connect with us</h1>
                </div>

                {/* social media icons */}
                <div className='flex justify-center gap-6 text-2xl'>

                    <a href="https://www.facebook.com/" target='_blank'>
                        <FaFacebook />
                    </a>

                    <a href="https://www.linkedin.com/" target='_blank'>
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/" target='_blank'>
                        <FaGithub />
                    </a>

                    <a href="https://github.com/" target='_blank'>
                        <FaGithub />
                    </a>

                </div>

            </div>

            {/* right content */}
            <div>
                <img
                    src="/Shriyasss.jpeg"
                    alt=""
                    className='sm:h-90 rounded-full sm:w-90 h-60 w-60 mt-25 sm:mt-0'
                />
            </div>

        </div>
    )
}

export default Hero;
