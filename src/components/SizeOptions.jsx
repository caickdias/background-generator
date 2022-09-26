import React from 'react'

const SizeOptions = () => {

  const buttonStyle = 'px-2 py-[4px] rounded-full bg-cyan-600 hover:bg-cyan-700'

  return (
    <div className='flex items-center justify-evenly w-full text-white font-bold'>
      <button
        className={`${buttonStyle}`}
      >
        Blog Post
      </button>
      
      <button
        className={`${buttonStyle}`}
      >
        LinkedIn
      </button>
    </div>
  )
}

export default SizeOptions