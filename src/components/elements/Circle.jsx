import React from 'react'

const Circle = ({ size=200, bg='blue', top=0, left=0 }) => {
  return (
    <div
      style={{        
        position: 'absolute',
        top: top,
        left: left,
        height: size,
        width: size,
        borderRadius: '100%',
        backgroundColor: bg,
      }}
    >      
    </div>
  )
}

export default Circle