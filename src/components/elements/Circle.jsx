import React from 'react'

const Circle = ({ size=200, color='blue', top=0, left=0 }) => {
  return (
    <div
      style={{        
        position: 'absolute',
        top: top,
        left: left,
        height: size,
        width: size,
        borderRadius: '100%',
        backgroundColor: color,
      }}
    >      
    </div>
  )
}

export default Circle