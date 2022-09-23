import React from 'react'
import ColorPicker from '../ColorPicker'

const Sidebar = () => {
  return (
    <div className='flex flex-col w-1/4 min-w-[20%] h-screen p-4 text-gray-200 shadow-lg shadow-gray-900 bg-zinc-800 overflow-y-scroll'>
        
        <div className='h-fit w-full border-b-[1px] border-gray-500 py-2 '>
          <h1 className='font-bold text-2xl'>
              Background generator
          </h1>
        </div>

        <ColorPicker />
        
    </div>
  )
}

export default Sidebar