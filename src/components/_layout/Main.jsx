import React from 'react'

import Canvas from '../Canvas'
import SizeOptions from '../SizeOptions';


const Main = () => {
  return (
    <div className='flex flex-col items-center h-full w-full max-w-[80%] py-12'>

      <SizeOptions />        

      <Canvas />
    </div>
  )
}

export default Main