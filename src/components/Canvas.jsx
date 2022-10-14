import React, { useContext, useEffect } from 'react'

import AppContext from '../context/AppContext';
import { Stage, Layer, Rect } from 'react-konva';

const Canvas = () => {
    
  const { bgColor, elements, selectedElementId, setSelectedElementId, canvasSize } = useContext(AppContext);
  
  const handleSelectObject = id => {
    setSelectedElementId(id);    
  }

  return (
    <Stage width={canvasSize.width} height={canvasSize.height} style={{ backgroundColor: bgColor }}>
      <Layer>
        {          
          elements?.map(element => {
            const { id, type: CanvasObject, ...rest } = element;   

            return (              
              <CanvasObject 
                key={id}
                stroke={selectedElementId == id ? 'red' : 'transparent'}
                onClick={() => handleSelectObject(id)}
                {...rest}
              />                            
            )
          })
        }
      </Layer>
    </Stage>
  )
}

export default Canvas