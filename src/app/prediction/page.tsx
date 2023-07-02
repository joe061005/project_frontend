import React from 'react'
import { server_baseURL } from '../../utils/global'
import { stockImage, getStockImg } from '../page';
import Image from "next/image"
import PieChart from '../../components/PieChart/PieChart'
import moment from 'moment';
import './style.css'
var stats = require("stats-lite")

interface stockSentimentRaw {
  id: number;
  Ticker: string;
  date: Date;
  sentence: string;
  sentiment: number;
}

interface stockSentiment {
  [key: string]: number[]
}

export interface stockSentimentMap{
  Bearish: number,
  Neutral: number,
  Bullish: number,

}

const getStockSentiment = async (): Promise<stockSentiment> => {
  const res = await fetch(`${server_baseURL}/stock`, { cache: 'no-store' })
  const data: stockSentimentRaw[] = await res.json()

  const groupByTicker: { [key: string]: number[] } = data.reduce((group, item) => {
    const { Ticker } = item;
    group[Ticker] = group[Ticker] || [];
    group[Ticker].push(item.sentiment);
    return group;
  }, {} as { [key: string]: number[] })

  console.log("xdd", groupByTicker);

  return groupByTicker
}


const Prediction = async () => {

  const stockImage: stockImage[] = await getStockImg()
  const stockSentiment: stockSentiment = await getStockSentiment()

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

    // algo to determine the sentiment (# of neutral > # of positive and negative -> neutral else max(# of positive , # of negative))
    const index = SentimentArr.length > 0 && SentimentArr.filter(x => x == 1).length < SentimentArr.filter(x => x == 0).length +  SentimentArr.filter(x => x == 2).length? Math.max(SentimentArr.filter(x => x == 0).length, SentimentArr.filter(x => x == 2).length) : 1

    console.log(index);

    return index == 0 ? "Bearish" : index == 1 ? "Neutral" : "Bullish"
  }

  return (
    <div>
      <div className='font-medium text-lg'>Prediction Summary on {moment().format('DD-MM-YYYY')}</div>
      <div className="mt-16 chartContainer">
        <PieChart sentimentMap={getSentimentArr()}/>
      </div>
      <div className="mt-16">
        <div className="flex justify-between flex-wrap ">
          {
            stockImage.map((stock, index) => {

              return (
                <a className='py-6 mb-6 items_5 item flex items-center justify-center' href={`/prediction/${stock.Ticker}`}>
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
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Prediction