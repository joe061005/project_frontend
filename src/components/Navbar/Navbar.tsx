import React from 'react'
import Link from 'next/link'
import './style.css'

const Navbar = () => {


  return (
    <div className="h-24 flex justify-between items-center border-b-2">
        <Link href='/' className='font-bold text-2xl'>
            BertPredict
        </Link>
        <div className="flex items-center gap-5">
          <Link className="Home" href='/'>Home</Link>
          <Link className="Overview" href='/overview'>Overview</Link>
          <Link className="Prediction" href='/prediction'>Prediction</Link>
        </div>
    </div>
  )
}

export default Navbar