import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import stockImg from '../../public/prediction.jpg'
import Image from "next/image"
import ImgList from '../components/ImageList/ImageList'
import { API } from '@/API/api'
import { stockImage } from '@/model/model'

const Home = async () => {

  const stockImages: stockImage[] = await API.getStockImg()

  return (
    <div className='flex flex-col gap-32'>
      <div className='flex items-center gap-10 h-96'>
        <div className="flex-1 flex flex-col gap-14">
          <h1 className={styles.title}>
            Better prediction
          </h1>
          <p className="text-base font-light">
            Predicting the stock price movement of the top 10 US tech stocks
          </p>
          <Link href="/prediction" className="p-2 bg-emerald-400 w-2/6 h-1/4 flex align-center justify-center rounded-md my-1 ">
            Explore now
          </Link>

        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image src={stockImg} alt="" className='object-contain place-self-center' height={500} width={600}/>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-16'>
        <div className='font-medium text-2xl'>Top 10 US tech stocks</div>
        <ImgList Images={stockImages} />
      </div>
    </div>
  )
}

export default Home

