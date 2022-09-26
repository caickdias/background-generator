import React from 'react'

const Circle = ({ size=200, bg='blue', top=0, left=0 }) => {
  return (
    <div
      style={{        
        height: size,
        width: size,
        borderRadius: '100%',
        backgroundColor: bg,
        position: 'absolute',
        top: top,
        left: left,
      }}
    >      
    </div>
  )
}

export default Circle