import React from 'react'
import { server_baseURL } from '../../..//utils/global'
import { API } from '@/API/api';
import Image from "next/image"
import PieChart from '../../../components/PieChart/PieChart'
import moment from 'moment';
// import './style.css'
var stats = require("stats-lite")
import { stockSentiment, stockSentimentRaw, stockImage } from '@/model/model';

// return component here

const PredictionByTicker = async ({params}: {params: {id: string}}) => {

  const stockImage: stockImage[] = await API.getStockImg()
  const stockWeeklySentiment: stockSentiment = await API.getWeeklySentimentByTicker(params.id)
  
  return (
    <div>
      <div>{stockWeeklySentiment['2023-06-01']}</div>
    </div>
  )
}

export default PredictionByTicker