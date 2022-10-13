import React, { useContext } from 'react'
import ColorPicker from '../ColorPicker'

import AppContext from '../../context/AppContext';
import elementObjects from '../../data/elements';

const Sidebar = () => {

  const { setElements, selectedElementId, setSelectedElementId } = useContext(AppContext);

  const handleAddElement = type => {
    const id = (Math.random() * 10000).toString();

    setElements((elements) => 
      [...elements, 
        {
          ...elementObjects[type],
          id
        }        
      ])

      setSelectedElementId(id);      
  }

  return (
    <div className='flex flex-col w-1/4 min-w-[20%] h-screen p-4 text-gray-200 shadow-lg shadow-gray-900 bg-zinc-800 overflow-y-scroll'>
        
        <div className='h-fit w-full border-b-[1px] border-gray-500 py-2 '>
          <h1 className='font-bold text-2xl'>
              Background generator
          </h1>
        </div>

        <ColorPicker />
        
        <div className='h-fit w-full border-b-[1px] border-gray-500 mb-4'>
          <h1 className='font-bold text-lg'>
              Add Element
          </h1>
        </div>
        
        <div className='flex flex-wrap justify-center items-center'>
          <button className='w-1/2 mb-2' onClick={() => handleAddElement('circle')} >
            Circle
          </button>
          <button className='w-1/2 mb-2' onClick={() => handleAddElement('rect')} >
            Rect
          </button>
          <button className='w-1/2 mb-2' onClick={() => handleAddElement('rect')} >
            Image
          </button>
          <button className='w-1/2 mb-2' onClick={() => handleAddElement('text')} >
            Text
          </button>
        </div>
        
        <div>
          <p>{selectedElementId}</p>
        </div>
    </div>
  )
}

export default Sidebar