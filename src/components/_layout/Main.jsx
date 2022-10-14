import React, { useContext, useState, useEffect } from 'react'

import AppContext from '../../context/AppContext';

import Canvas from '../Canvas'

const Main = () => {

  const { elements, setElements, selectedElementId, canvasSize } = useContext(AppContext);
  const [width, setWidth] = useState(200);

  useEffect(() => {
    const selected = elements.find(element => element.id == selectedElementId) || '';
    
    setWidth(selected.width || selected.radius || selected.fontSize)    
  }, [selectedElementId]);

  const handleChangeWidth = event => {
    const value = event.target.value;

    const index = elements.findIndex(element => element.id == selectedElementId);
    const updatedElement = {
        ...elements[index],
        width: width
    }
    const updatedElements = elements.map((element) => {
        if(element.id == updatedElement.id){
            return updatedElement;
        }
        return {...element};
    });
    setElements(updatedElements);
    setWidth(value);
  }

  return (
    <div className='flex flex-col justify-center items-center h-full w-full max-w-[80%] py-12'>

      
      <div className='flex flex-col'>
        
        <div className='flex flex-row'>
        
        <div className='h-full w-8'>
          { selectedElementId && 
              <input orient="vertical" className='h-full bg-transparent' type='range' />
          }
        </div>

          <Canvas />
        </div>
        
        <div className='w-full h-6 pt-2 pl-8'>
          { selectedElementId && 
            <input 
              className='w-full bg-transparent' 
              type='range' 
              min={1}
              max={canvasSize.width} 
              value={width}                      
              onChange={handleChangeWidth}
            />
          }
        </div>

      </div>

    </div>
  )
}

export default Main