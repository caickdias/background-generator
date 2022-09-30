import React, { useContext } from 'react'

import AppContext from '../context/AppContext';

const Canvas = () => {
    
  const { bgColor, elements } = useContext(AppContext);
  
  return (
    <div className='flex max-w-[75%] w-[2000px]'> 
      <div className='py-8'>
      <input
        type="range"
        orient="vertical"
        class="          
          self-center                        
          h-full          
          mr-4          
          focus:outline-none focus:ring-0 focus:shadow-none
        "
        id="customRange1"
      />      
      </div>

      <div className='w-full h-full'>
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

        <div class="relative pt-1">
          <input
              type="range"
              class="                        
                w-full                
                h-6
                mt-2                
                focus:outline-none focus:ring-0 focus:shadow-none
              "
              id="customRange1"
          />         
        </div>      

      </div>  
    </div>
  )
}

export default Canvas