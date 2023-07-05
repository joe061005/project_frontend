import React from 'react'
import Image from "next/image"
import PieChart from '../../components/PieChart/PieChart'
import moment from 'moment';
import './style.css'
var stats = require("stats-lite")
import Link from 'next/link'
import { API } from '@/API/api';
import { stockImage, stockSentiment, stockSentimentMap } from '@/model/model';


const Prediction = async () => {

  const stockImage: stockImage[] = await API.getStockImg()
  const stockSentiment: stockSentiment = await API.getStockSentiment()

  const getSentimentArr = () => {
    const valueMap: stockSentimentMap = {
      "Bearish": 0,
      "Neutral": 0,
      "Bullish": 0
    }
    stockImage.map((stock) => {
      const sentimentText: string =  getSentimentTextByIndex(stockSentiment[stock.Ticker] ? stockSentiment[stock.Ticker] : [])
      valueMap[sentimentText as keyof stockSentimentMap] = valueMap[sentimentText as keyof stockSentimentMap] + 1
    })
    console.log('map', valueMap);
    
    return valueMap
  }

  const getSentimentTextByIndex = (SentimentArr: number[]): string => {


    const numOfBearish = SentimentArr.length > 0 ? SentimentArr.filter(x => x == 0).length: 0
    const numOfNeutral = SentimentArr.length > 0 ? SentimentArr.filter(x => x == 1).length: 0
    const numOfBullish = SentimentArr.length > 0 ? SentimentArr.filter(x => x == 2).length: 0

    // algo to determine the sentiment (# of neutral > # of positive and negative -> neutral else max(# of positive , # of negative))
    const index = SentimentArr.length > 0 && numOfNeutral <= numOfBearish +  numOfBullish? Math.max(numOfBearish, numOfBullish) : 1

    console.log(index);

    return index == 0 ? "Bearish" : index == 1 ? "Neutral" : "Bullish"
}


  return (
    <div>
      <div className='font-medium text-lg'>Prediction Summary on {moment().format('DD-MM-YYYY')}</div>
      <div className="mt-16 flex flex-col items-center justify-center ">
        <PieChart sentimentMap={getSentimentArr()}/>
      </div>
      <div className="mt-16">
        <div className="flex justify-between flex-wrap ">
          {
            stockImage.map((stock, index) => {

              return (
                <Link className='py-6 mb-6 items_5 item flex items-center justify-center' href={{pathname: `/prediction/${stock.Ticker}`}}>
                  <div className="flex flex-col items-center gap-5 itemContainer">
                    <div>
                      <Image src={`${stock.ImageURL}`} alt='' width={45} height={45} />
                    </div>
                    <div className="font-medium text-xl">
                      {stock.Ticker}
                    </div>
                    <div className=" text-base" style={{color: `${getSentimentTextByIndex(stockSentiment[stock.Ticker] ? stockSentiment[stock.Ticker] : []) == "Bearish" ? '#cf3c53' : getSentimentTextByIndex(stockSentiment[stock.Ticker] ? stockSentiment[stock.Ticker] : []) == "Bullish"? '#05a66e': '#3f48cb'}`}}>
                      {getSentimentTextByIndex(stockSentiment[stock.Ticker] ? stockSentiment[stock.Ticker] : [])}
                    </div>
                    <div className='btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="BtnSvg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor">
                        </path>
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Prediction