import React from 'react'
import Link from 'next/link';
function Navbar () {
  
  return (
    <nav className='flex flex-col  md:flex-row lg:flex-row md:justify-between lg:justify-between w-12/12 mb-12 '>
      <Link href="/" className='text-3xl flex tracking-tighter'>NotAi.</Link> 
      <div className='flex flex-row justify-around'>
        {/* <SearchForm query={query}/>  */}
        <a href="" className='text-2xl ml-3 hidden '>Signup</a>
      </div> 
    </nav>
  )
}

export default Navbar;