import React from 'react'

const Rectangle = ({ base=200, height=100, color='green', top=0, left=0 }) => {
  return (
    <div
        style={{        
            position: 'absolute',
            top: top,
            left: left,
            height: height,
            width: base,            
            backgroundColor: color,
      }}
    >

    </div>
  )
}

export default Rectangle