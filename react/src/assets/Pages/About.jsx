import React from 'react'

function About() {
    return (
        <div className='pt-30 relative lg:bottom-0 bottom-0 md:bottom-40 md:border-t border-gray-400 border-t-2'>

            <h1 className='font-bold text-5xl text-green-400 text-center relative'>
                About Me
            </h1>

            <div className='max-w-3xl md:mx-auto p-6'>

                <p className='text-gray-500 p-4 text-justify'>
                    Hello, I am Shriya Karki, a passionate full stack developer from Nepal. I enjoy building responsive and user friendly web applications.
                </p>

                <p className='text-gray-500 p-4 text-justify'>
                    I love learning new technologies, solving problems and creating modern websites that provide great user experiences.
                </p>

            </div>

            <div className='max-w-3xl md:mx-auto mt-2 border border-gray-300 rounded-xl p-5 m-10'>

                <h2 className='uppercase mb-4 font-bold text-green-400 text-center'>
                    My Full Stack Knowledge and Skills
                </h2>

                <ul className='text-gray-700 grid md:grid-cols-2 gap-3'>

                    <li className='bg-gray-200 p-2 rounded'>
                        HTML, CSS AND JAVASCRIPT
                    </li>

                    <li className='bg-gray-200 p-2 rounded'>
                        REACT JS AND TAILWIND CSS
                    </li>

                    <li className='bg-gray-200 p-2 rounded'>
                        USER INTERFACE (UI)
                    </li>

                    <li className='bg-gray-200 p-2 rounded'>
                        MONGODB, EXPRESS AND NODEJS
                    </li>

                    <li className='bg-gray-200 p-2 rounded'>
                        DATABASE
                    </li>

                    <li className='bg-gray-200 p-2 rounded'>
                        GIT AND GITHUB
                    </li>

                </ul>

            </div>

        </div>
    );
}

export default About;
