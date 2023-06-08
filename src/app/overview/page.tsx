import React from 'react'
import StockTable from '../../components/StockTable/StockTable'
import { GetServerSideProps } from 'next';

export interface StockPriceDetails{
  queryCount: Number,
  resultsCount: Number,
  adjusted: boolean,
  results: {
    T: String;
    c: Number;
    h: Number;
    l: Number;
    n: Number;
    o: Number;
    t: Number;
    v: Number;
    vw: Number;
  }[]
}

const getStockPrice = async (): Promise<StockPriceDetails> => {
  const res = await fetch("https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-06-02?adjusted=true&apiKey=Gh8xZ543zMBDukzN4CNcYoZYtbmRM7fC", {cache: 'no-store'})
  const data: StockPriceDetails = await res.json()
  return data
}

const Overview = async () => {

  const stockPriceInfo: StockPriceDetails = await getStockPrice()
  

  return (
    <div>
        {stockPriceInfo.results[0].T}
    </div>
  )
}

export default Overview

// export const getServerSideProps: GetServerSideProps<StockPriceProps> = async (context) => {
//     const res = await fetch("https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-06-02?adjusted=true&apiKey=Gh8xZ543zMBDukzN4CNcYoZYtbmRM7fC")
//     const data = await res.json();
  
//     console.log(data);
    
//     return {
//       props: {
//         stockPriceInfo: data.results
//       }
//     }
//   }