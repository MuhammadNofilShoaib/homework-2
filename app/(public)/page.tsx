import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='flex justify-center bg-cover bg-center bg-no-repeat' style={ {backgroundImage: "url('/r.png')"}}>
        <div className=' py-64 flex justify-center gap-20 ' >
        <Link href='/login'className=' py-5 px-14 font-bold uppercase hover:scale-105 transition duration-300 ease-in-out ' style={{background: '#000000', borderRadius: '10px',  color: "#6A6E6F" }}>Login</Link>
        <Link href='/signup'className=' py-5 px-14 font-bold uppercase  hover:scale-105 transition duration-300 ease-in-out' style={{background: '#000000', borderRadius: '10px', color: "#6A6E6F" }}>Sign Up</Link>
        </div>
    </div>
  )
} 

export default page  
