import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import stockImg from '../../public/prediction.jpg'
import Image from "next/image"

const Home = () => {
  return (
    <div className='flex items-center gap-28'>
      <div className="flex-1 flex flex-col gap-8">
        <h1 className={styles.title}>
          Better prediction
        </h1>
        <p className="text-base font-light">
          Predicting the stock price movement of the top 10 US tech stocks
        </p>
        <Link href= "/overview" className="p-2 bg-emerald-400 w-2/6 h-1/4 flex align-center justify-center rounded-md my-1 ">
            Explore now
        </Link>
        
      </div>
      <div className="flex-1 flex flex-col gap-50">
        <Image src={stockImg} alt="" className='w-full h-96 object-contain'/>
      </div>
      
    </div>
  )
}

export default Home

