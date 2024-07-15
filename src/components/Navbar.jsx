import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px] bg-white m-3 rounded-md flex items-center justify-center'>
      <div className='flex items-center justify-center gap-2 font-semibold text-lg ' >
        <img src="/firebase.svg" alt="" />
        <h1>Firebase Contact App</h1>
      </div>
    </div>
  )
}

export default Navbar
