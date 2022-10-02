import React, { useContext } from 'react'

import AppContext from '../context/AppContext';
import { Stage, Layer } from 'react-konva';

const Canvas = () => {
    
  const { bgColor, elements } = useContext(AppContext);
  
  return (
    <Stage width={600} height={300} style={{ backgroundColor: bgColor }}>
      <Layer>
        {
          elements.map(element => element)
        }
      </Layer>
    </Stage>
  )
}

export default Canvas