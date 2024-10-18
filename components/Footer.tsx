import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='flex justify-center bg-cover bg-center bg-no-repeat bg-black'>
    <div className=' py-20 w-1/3 px-32' style={ {}}>
        <ul style={ {color: '#6A6E6F'}} className='contents capitalize'>
        <li className='ml-28 mb-3'><Link href='/tnc'>shop and learn</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>wallet</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>account</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>entertainment</Link></li> 
        </ul>
    </div>
    <div className='py-20 px-32 w-1/3 '  style={ {}}>
        <ul style={ {color: '#6A6E6F'}} className='contents capitalize'>
        <li className='ml-28 mb-3'><Link href='/tnc'>store</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>for business</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>for education</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>for healthcare</Link></li>
        </ul>
    </div>
    <div className=' py-20 w-1/3 px-32 '  style={ {}}>
        <ul style={ {color: '#6A6E6F'}} className='contents capitalize '>
        <li className='ml-28 mb-3'><Link href='/tnc'>for government</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>values</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>about</Link></li>
        <li className='ml-28 mb-3'><Link href='/tnc'>terms and conditions</Link></li>
        </ul>
    </div>
    </div>
  )
}

export default Footer
