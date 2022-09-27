import React from 'react'

const Rectangle = ({ base=200, height=100, bg='green', top=0, left=0 }) => {
  return (
    <div
        style={{        
            position: 'absolute',
            top: top,
            left: left,
            height: height,
            width: base,            
            backgroundColor: bg,
      }}
    >

    </div>
  )
}

export default Rectangle