'use client';

import React from 'react'
import { server_baseURL } from '../../utils/global'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from "next/image"
import styles from '../page.module.css'
import millify from 'millify';


interface StockDetails {
  id: Number;
  ImageURL: String;
  MarketCap: Number;
  Ticker: String;
  Name: String;
  LastPrice: Number;
  T: String;
  c: Number;
  h: Number;
  l: Number;
  n: Number;
  o: Number;
  t: Number;
  v: Number;
  vw: Number;
}


// const getStockDetails = async (): Promise<StockDetails[]> => {
// const res = await fetch(`${server_baseURL}/getStockDetails`, {cache: 'no-store'})
// const data: StockDetails[] = await res.json()
// return data
// }

const Overview = async () => {

  // const stockDetails: StockDetails[] = await getStockDetails()

  const stockDetails = [{"id":1,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686488914/oihcgih1hnid38ri76ur.jpg","MarketCap":2846265913920,"Ticker":"AAPL","Name":"Apple Inc.","LastPrice":180.57,"T":"AAPL","v":48869360,"vw":181.4395,"o":181.5,"c":180.96,"h":182.23,"l":180.63,"t":1686340800000,"n":557894},{"id":2,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686488915/syeepckibbxnwvzaqf9l.jpg","MarketCap":2429842984634.25,"Ticker":"MSFT","Name":"Microsoft Corp","LastPrice":325.26,"T":"MSFT","v":22528950,"vw":327.3052,"o":324.99,"c":326.79,"h":329.99,"l":324.41,"t":1686340800000,"n":367279},{"id":3,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686488977/c99q57qnnniwqxbsuuby.png","MarketCap":1560080390000,"Ticker":"GOOG","Name":"Alphabet Inc. Class C Capital Stock","LastPrice":122.67,"T":"GOOG","v":20313676,"vw":123.2914,"o":122.56,"c":122.87,"h":124.285,"l":122.42,"t":1686340800000,"n":209979},{"id":4,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686488979/hu3wn8opgk6cdog59u7t.jpg","MarketCap":1266435455709.84,"Ticker":"AMZN","Name":"Amazon.Com Inc","LastPrice":124.25,"T":"AMZN","v":51392018,"vw":124.1476,"o":124.08,"c":123.43,"h":125.8,"l":123.19,"t":1686340800000,"n":462583},{"id":5,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686489042/mi6qomsocfoxzgdfgezw.png","MarketCap":957619000000,"Ticker":"NVDA","Name":"Nvidia Corp","LastPrice":385.1,"T":"NVDA","v":42671747,"vw":390.7545,"o":390.37,"c":387.7,"h":397.11,"l":385.67,"t":1686340800000,"n":586699},{"id":6,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686489043/wq9mjc5ughef8qwjysl9.png","MarketCap":774626851164.4,"Ticker":"TSLA","Name":"Tesla, Inc. Common Stock","LastPrice":234.86,"T":"TSLA","v":200174671,"vw":247.1601,"o":249.07,"c":244.4,"h":252.42,"l":242.02,"t":1686340800000,"n":2091072},{"id":7,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686489106/y3dorhst6pt6vvyds0lp.jpg","MarketCap":678995852408.2999,"Ticker":"META","Name":"Meta Platforms, Inc. Class A Common Stock","LastPrice":264.58,"T":"META","v":16949794,"vw":265.0749,"o":262.48,"c":264.95,"h":267.949,"l":261.7,"t":1686340800000,"n":239879},{"id":8,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686489108/muvkpvq5mjbrjqxrsdak.jpg","MarketCap":533163379760,"Ticker":"TSM","Name":"Taiwan Semiconductor Manufacturing Company Ltd.","LastPrice":99.94,"T":"TSM","v":14906100,"vw":103.2768,"o":102.7,"c":102.8,"h":104.68,"l":102.25,"t":1686340800000,"n":163581},{"id":9,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686489170/kc9hqke9cv9cedcqp3vz.jpg","MarketCap":332054930571.1,"Ticker":"AVGO","Name":"Broadcom Inc. Common Stock","LastPrice":804.2,"T":"AVGO","v":1924688,"vw":809.153,"o":805.8,"c":804.62,"h":817.7489,"l":803.88,"t":1686340800000,"n":63256},{"id":10,"ImageURL":"https://res.cloudinary.com/dglxbixx0/image/upload/v1686489171/v2pjovndltazvlmlnktn.png","MarketCap":296573249700,"Ticker":"ORCL","Name":"Oracle Corp","LastPrice":107.48,"T":"ORCL","v":12593073,"vw":109.5998,"o":107.7,"c":109.85,"h":110.15,"l":107.41,"t":1686340800000,"n":138289}]


  return (
    <div>
      <TableContainer component={Paper} className='my-6'>
        <Table sx={{ minWidth: 1100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h %Change</TableCell>
              <TableCell>24h Volume (shares)</TableCell>
              <TableCell>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockDetails.map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{
                  "& .MuiTableRow-root:hover": {
                    backgroundColor: "primary.light"
                  }

                }}
              >
                <TableCell
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <Image src={row.ImageURL} alt='' width={30} height={30} />
                  <p className='font-bold'>{row.Ticker}</p>
                  <p className='text-gray-400'>{row.Name}</p>
                </TableCell>
                <TableCell>${row.c}</TableCell>
                <TableCell sx={{
                  color: `${(Math.round(((row.c - row.LastPrice) / row.LastPrice * 100) * 100) / 100) < 0 ? '#cf3c53' : '#05a66e'}`
                }} >
                  {Math.round(((row.c - row.LastPrice) / row.LastPrice * 100) * 100) / 100 > 0? '+': ''}{Math.round(((row.c - row.LastPrice) / row.LastPrice * 100) * 100) / 100}%
                </TableCell>
                <TableCell >{millify(row.v)}</TableCell>
                <TableCell>${millify(row.MarketCap)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Overview