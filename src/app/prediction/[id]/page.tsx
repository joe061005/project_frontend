import React from 'react'
import { API } from '@/API/api';
import Image from "next/image"
import PieChart from '../../../components/PieChart/PieChart'
import BarChart from '@/components/BarChart/Barchart';
import moment from 'moment';
import './style.css'
var stats = require("stats-lite")
import { stockSentiment, stockSentimentMap, StockDetails, updatedStockSentimentMap } from '@/model/model';

// return component here

const PredictionByTicker = async ({ params }: { params: { id: string } }) => {

  const stockDetails: StockDetails = (await API.getStockDetails()).filter((data) => data.Ticker == params.id)[0]
  const stockWeeklySentiment: stockSentiment = await API.getWeeklySentimentByTicker(params.id)

  const getWeeklySentimentArr = () => {
    const newSentimentArr: updatedStockSentimentMap = {} as updatedStockSentimentMap
    Object.keys(stockWeeklySentiment).map((date) => {
      const valueMap: stockSentimentMap = {
        "Bearish": 0,
        "Neutral": 0,
        "Bullish": 0
      }
      stockWeeklySentiment[date].map((index) => {
        const sentimentText: string =  index == 0? "Bearish" : index == 1 ? "Neutral" : "Bullish"
        valueMap[sentimentText as keyof stockSentimentMap] = valueMap[sentimentText as keyof stockSentimentMap] + 1
      })
      newSentimentArr[date] = valueMap
    })

    console.log("getWeeklySentimentArr", newSentimentArr);
    
    
    return newSentimentArr
  }

  return (
    <div className='flex flex-col gap-2'>
      {/* <div className='font-medium text-lg'>Prediction Summary of {params.id} on {moment().format('DD-MM-YYYY')}</div> */}
      <div className='flex flex-col gap-2'>
        <div className="flex items-center gap-2">
          {<Image src={`${stockDetails.ImageURL}`} alt='' width={30} height={30} />}
          <p className='text-gray-400'>{stockDetails.Name}</p>
        </div>
        <div className="flex items-end gap-2">
          <p className='text-3xl'>{stockDetails.LatestPrice}</p>
          <p className='USDText'>USD</p>
        </div>
        <div className="flex gap-2" style={{ color: `${(Math.round(((stockDetails.LatestPrice - stockDetails.PrevPrice) / stockDetails.PrevPrice * 100) * 100) / 100) < 0 ? '#cf3c53' : '#05a66e'}` }}>
          <p className='text-base'>{Math.round(((stockDetails.LatestPrice - stockDetails.PrevPrice) / stockDetails.PrevPrice * 100) * 100) / 100 > 0 ? '+' : ''}{(Math.round((stockDetails.LatestPrice - stockDetails.PrevPrice) * 100) / 100).toFixed(2)}</p>
          <p className='text-base'>({Math.round(((stockDetails.LatestPrice - stockDetails.PrevPrice) / stockDetails.PrevPrice * 100) * 100) / 100}%)</p>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-4">
        {/*-------------------------------------- change the date -----------------------------------------------*/}
        <PieChart sentimentMap={getWeeklySentimentArr()['03-06-2023']}/>
        <p className='font-medium text-lg'>Daily sentiment Index ({moment().format('DD-MM-YYYY')})</p>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-4">
        {/*-------------------------------------- change the date -----------------------------------------------*/}
        <BarChart />
        <p className='font-medium text-lg'>Daily sentiment Index ({moment().format('DD-MM-YYYY')})</p>
      </div>

    </div>
  )
}

export default PredictionByTicker