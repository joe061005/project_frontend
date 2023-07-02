import React from 'react'
import Link from 'next/link'

const Navbar = () => {


  return (
    <div className="h-24 flex justify-between items-center border-b-2">
        <Link href='/' className='font-bold text-2xl'>
            BertPredict
        </Link>
        <div className="flex items-center gap-5">
          <Link href='/'>Home</Link>
          <Link href='/overview'>Overview</Link>
          <Link href='/prediction'>Prediction</Link>
        </div>
    </div>
  )
}

export default Navbar