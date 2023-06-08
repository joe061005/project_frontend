import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {StockPriceInfo} from '../../app/overview/page'

interface StockTableProps {
  stockPriceInfo: StockPriceInfo[]
}

const VISIBLE_FIELDS: string[] = ['Name', 'Price', 'Change', '24h Volume', 'Market Cap'];

const StockTable = ({stockPriceInfo}: StockTableProps) => {
  return (
    <div className="p-10">
      { stockPriceInfo &&
        stockPriceInfo.map((ele) => (
          <p>{ele.T}</p>
        ))
      }
    </div>
  )
}

export default StockTable