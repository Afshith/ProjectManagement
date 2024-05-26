import React from 'react'
import Button from './Button'

export default function NoProjectPage({addProjectHandle}) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-900 mb-8 drop-shadow-lg uppercase">No projects selected</h1>
        <p className='mb-4 text-gray-900'>select a project or get started with a new one</p>
        <p className='mt-8'>
            <Button onClick = {addProjectHandle}>Create New Project</Button>
        </p>
    </div>
  )
}
