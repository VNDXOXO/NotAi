import React from 'react'
function Navbar ({ params }: { params?: string}) {
  const query = params;
  return (
    <nav className='flex flex-col  md:flex-row lg:flex-row md:justify-between lg:justify-between w-12/12 pb-10 '>
      <a href="" className='text-4xl flex tracking-tighter'>NotAi.</a>
      <div className='flex flex-row justify-around'>
        {/* <SearchForm query={query}/>  */}
        <a href="" className='text-2xl ml-3 hidden '>Signup</a>
      </div> 
    </nav>
  )
}

export default Navbar;