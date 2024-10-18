import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-center'>
    <div className='py-6 w-screen bg-cover bg-center' style={ { background: '#000000',} }> 
      <ul className='flex justify-center gap-20 capitalize items-center' style={ {color: '#6A6E6F',fontSize: '16px',} }>  
       <Link href= "/nill" className='hover:text-yellow-400 transition-colors duration-300'>product</Link>
      <Link href= "/nill" className='hover:text-yellow-400 transition-colors duration-300'>solution</Link>
      <Link href= "/nill" className='hover:text-yellow-400 transition-colors duration-300'>tools</Link>
      <Link href= "/nill" className='hover:text-yellow-400 transition-colors duration-300'>pricing</Link>   
      </ul>
    </div>
    </div>
  )
}

export default Header 
