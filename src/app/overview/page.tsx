import React from 'react'
import StockTable from '../../components/StockTable'
import { GetServerSideProps } from 'next';

export type StockPriceInfo = {
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
  
  // interface StockPrice{
  //   stockPriceInfo: StockPriceInfo[]
  // }

const Overview = async () => {

  // const dynamicData: StockPriceInfo = await fetch("https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-06-02?adjusted=true&apiKey=Gh8xZ543zMBDukzN4CNcYoZYtbmRM7fC", {cache: 'no-store' }).then((res) => { console.log(res.json<StockPriceInfo>()); return res.json()})
  

  return (
    <div>
        {/* <StockTable stockPriceInfo={stockPriceInfo} /> */}
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