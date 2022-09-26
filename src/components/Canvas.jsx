import React, { useContext } from 'react'

import AppContext from '../context/AppContext';

const Canvas = () => {
    
  const { bgColor, elements } = useContext(AppContext);
  
  return (
    <div className='max-w-[75%] w-[2000px]'>
        <div className={`relative w-full pt-[60%] max-w-screen-lg mt-8`} 
          style={{ 
            backgroundColor: bgColor 
          }}
        >
            <div className='absolute top-0 right-0 left-0 bottom-0 w-full h-full'>
                <div>
                    {
                      elements.map(element => element)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Canvas