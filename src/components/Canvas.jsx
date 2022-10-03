import React, { useContext, useEffect } from 'react'

import AppContext from '../context/AppContext';
import { Stage, Layer } from 'react-konva';

const Canvas = () => {
    
  const { bgColor, elements, setSelectedElementId } = useContext(AppContext);
  
  const handleSelectObject = id => {
    setSelectedElementId(id);    
  }

  return (
    <Stage width={600} height={300} style={{ backgroundColor: bgColor }}>
      <Layer>
        {          
          elements?.map(element => {
            const { id, type: CanvasObject, ...rest } = element;   

            return (
              <CanvasObject 
                key={id}
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