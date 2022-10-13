import React from 'react'

import Canvas from '../Canvas'
import SizeOptions from '../SizeOptions';


const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full max-w-[80%] py-12'>

      
      <div className='flex flex-col'>
        
        <div className='flex flex-row'>
          <div className='h-full w-8'>
            <input orient="vertical" className='h-full bg-transparent' type='range' />
          </div>

          <Canvas />
        </div>
        
        <div className='w-full h-12 pl-8 mt-2'>
          <input className='w-full bg-transparent' type='range' />
        </div>

      </div>

    </div>
  )
}

export default Main