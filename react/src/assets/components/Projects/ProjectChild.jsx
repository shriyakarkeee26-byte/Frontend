import React from 'react'

function ProjectChild( props ) {
  return (
    <div>
        <div className='text-center flex flex-col gap-4 justify-center items-center border border-gray-300 m-4 p-4 '>
        <img className='h-60 w-60 text-center' src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>

        <a href={props.url}>

        <button>{props.button}</button>
        </a>
    </div>
    </div>
  )
}

export default ProjectChild