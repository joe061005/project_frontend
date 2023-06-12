import React from 'react'
import Link from 'next/link'

interface stockImage{
  ImageURL: String
}

// const getStockDetails = async (): Promise<StockDetails[]> => {
// const res = await fetch(`${server_baseURL}/getStockDetails`, {cache: 'force-cache'})
// const data: StockDetails[] = await res.json()
// return data
// }

const Navbar = () => {

  // const stockDetails: StockDetails[] = await getStockDetails()

  return (
    <div className="h-28 flex justify-between items-center">
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