import { StockDetails, stockImage, stockSentimentRaw, stockSentiment, stockSentimentMap } from '../model/model'
import moment from 'moment'

const server_baseURL: string = 'http://localhost:3001/stock_prediction'

export const API = {
    getStockDetails: async (): Promise<StockDetails[]> => {
        const res = await fetch(`${server_baseURL}/getStockDetails`, { cache: 'no-store' })
        const data: StockDetails[] = await res.json()
        console.log("getStockDetails", data);
        
        return data
    },

    getStockImg: async (): Promise<stockImage[]> => {
        const res = await fetch(`${server_baseURL}/getStockImg`, { cache: 'force-cache' })
        const data: stockImage[] = await res.json()
        console.log("getStockImg", data);
        return data
    },

    getStockSentiment: async (): Promise<stockSentiment> => {
        const res = await fetch(`${server_baseURL}/stock`, { cache: 'no-store' })
        const data: stockSentimentRaw[] = await res.json()
      
        const groupByTicker: { [key: string]: number[] } = data.reduce((group, item) => {
          const { Ticker } = item;
          group[Ticker] = group[Ticker] || [];
          group[Ticker].push(item.sentiment);
          return group;
        }, {} as { [key: string]: number[] })
      
        console.log("getStockSentiment", groupByTicker);
      
        return groupByTicker
    },

    getWeeklySentimentByTicker: async (ticker: string): Promise<stockSentiment> => {
        const res = await fetch(`${server_baseURL}/stock/${ticker}`, { cache: 'no-store' })
        const data: stockSentimentRaw[] = await res.json()
      
        const groupByDate: { [key: string]: number[] } = data.reduce((group, item) => {
          // 2/6/2023
          const date = moment(item.date).format('DD-MM-YYYY');
          group[date] = group[date] || [];
          group[date].push(item.sentiment);
          return group;
        }, {} as { [key: string]: number[] })
      
        console.log("getWeeklySentimentByTicker", groupByDate);
      
        return groupByDate
    }

}