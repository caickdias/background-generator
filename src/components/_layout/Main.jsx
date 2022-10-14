import React, { useContext, useState, useEffect } from 'react'

import AppContext from '../../context/AppContext';

import Canvas from '../Canvas'

const Main = () => {

  const { elements, setElements, selectedElementId, canvasSize } = useContext(AppContext);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  useEffect(() => {
    const selected = elements.find(element => element.id === selectedElementId) || '';    
    setHeight(selected.height || selected.radius || selected.fontSize)    
    setWidth(selected.width || selected.radius || selected.fontSize)    
  }, [selectedElementId]);

  const handleChangeWidth = event => {
    const value = event.target.value;

    const index = elements.findIndex(element => element.id === selectedElementId);
    const updatedElement = {
        ...elements[index],
        width,
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

  const handleChangeHeight = event => {
    const value = event.target.value;

    const index = elements.findIndex(element => element.id === selectedElementId);
    const updatedElement = {
        ...elements[index],
        height,
    }
    const updatedElements = elements.map((element) => {
        if(element.id == updatedElement.id){
            return updatedElement;
        }
        return {...element};
    });
    setElements(updatedElements);
    setHeight(value);
  }

  return (
    <div className='flex flex-col justify-center items-center h-full w-full max-w-[80%] py-12'>

      
      <div className='flex flex-col'>
        
        <div className='flex flex-row'>
        
          <div className='h-full w-8'>
            { selectedElementId && 
                <input 
                  orient="vertical" 
                  className='h-full bg-transparent rotate-180' 
                  min={1}
                  max={canvasSize.height}
                  value={height}
                  type='range' 
                  onChange={handleChangeHeight}
                />
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
