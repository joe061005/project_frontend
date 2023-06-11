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




interface StockDetails {
  id: Number;
  ImageURL: String;
  MarketCap: Number;
  Ticker: String;
  Name: String;
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

  const stockDetails = [{ "id": 1, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686488914/oihcgih1hnid38ri76ur.jpg", "MarketCap": 2846265913920, "Ticker": "AAPL", "Name": "Apple Inc.", "T": "AAPL", "v": 61996852, "vw": 180.6479, "o": 181.03, "c": 180.95, "h": 181.78, "l": 179.26, "t": 1685736000000, "n": 617235 }, { "id": 2, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686488915/syeepckibbxnwvzaqf9l.jpg", "MarketCap": 2429842984634, "Ticker": "MSFT", "Name": "Microsoft Corp", "T": "MSFT", "v": 25853669, "vw": 334.9782, "o": 334.247, "c": 335.4, "h": 337.5, "l": 332.55, "t": 1685736000000, "n": 392402 }, { "id": 3, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686488977/c99q57qnnniwqxbsuuby.png", "MarketCap": 1560080390000, "Ticker": "GOOG", "Name": "Alphabet Inc. Class C Capital Stock", "T": "GOOG", "v": 19367453, "vw": 125.3646, "o": 124.49, "c": 125.23, "h": 126.745, "l": 124.35, "t": 1685736000000, "n": 207794 }, { "id": 4, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686488979/hu3wn8opgk6cdog59u7t.jpg", "MarketCap": 1266435455709, "Ticker": "AMZN", "Name": "Amazon.Com Inc", "T": "AMZN", "v": 61264414, "vw": 124.9012, "o": 124.92, "c": 124.25, "h": 126.39, "l": 124.015, "t": 1685736000000, "n": 518431 }, { "id": 5, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686489042/mi6qomsocfoxzgdfgezw.png", "MarketCap": 957619000000, "Ticker": "NVDA", "Name": "Nvidia Corp", "T": "NVDA", "v": 48258421, "vw": 395.5843, "o": 400.97, "c": 393.27, "h": 405, "l": 390.5801, "t": 1685736000000, "n": 696884 }, { "id": 6, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686489043/wq9mjc5ughef8qwjysl9.png", "MarketCap": 774626851164, "Ticker": "TSLA", "Name": "Tesla, Inc. Common Stock", "T": "TSLA", "v": 164397946, "vw": 214.4711, "o": 210.15, "c": 213.97, "h": 217.25, "l": 209.752, "t": 1685736000000, "n": 1519941 }, { "id": 7, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686489106/y3dorhst6pt6vvyds0lp.jpg", "MarketCap": 678995852408, "Ticker": "META", "Name": "Meta Platforms, Inc. Class A Common Stock", "T": "META", "v": 19416930, "vw": 273.216, "o": 272.66, "c": 272.61, "h": 275.35, "l": 271.12, "t": 1685736000000, "n": 270948 }, { "id": 8, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686489108/muvkpvq5mjbrjqxrsdak.jpg", "MarketCap": 533163379760, "Ticker": "TSM", "Name": "Taiwan Semiconductor Manufacturing Company Ltd.", "T": "TSM", "v": 13085123, "vw": 99.4246, "o": 101.25, "c": 98.94, "h": 101.3, "l": 98.62, "t": 1685736000000, "n": 127801 }, { "id": 9, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686489170/kc9hqke9cv9cedcqp3vz.jpg", "MarketCap": 332054930571, "Ticker": "AVGO", "Name": "Broadcom Inc. Common Stock", "T": "AVGO", "v": 6281484, "vw": 811.0673, "o": 790.64, "c": 812, "h": 823.77, "l": 787.2, "t": 1685736000000, "n": 153847 }, { "id": 10, "ImageURL": "https://res.cloudinary.com/dglxbixx0/image/upload/v1686489171/v2pjovndltazvlmlnktn.png", "MarketCap": 296573249700, "Ticker": "ORCL", "Name": "Oracle Corp", "T": "ORCL", "v": 8652377, "vw": 106.2704, "o": 106.52, "c": 105.89, "h": 106.77, "l": 105.75, "t": 1685736000000, "n": 102655 }]


  return (
    <div className=''>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">24h %Change</TableCell>
              <TableCell align="right">24h Volume</TableCell>
              <TableCell align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockDetails.map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  "& .MuiTableRow-root:hover": {
                    backgroundColor: "primary.light"
                  }

                }}
                className={styles.tableRow}
              >
                <TableCell component="th" scope="row">
                  <Image src={row.ImageURL} alt='' width={10} height={10} />
                  {row.Ticker}  {row.Name}
                </TableCell>
                <TableCell align="right">{(row.c - row.o) / row.o * 100}%</TableCell>
                <TableCell align="right">{row.v}</TableCell>
                <TableCell align="right">{row.MarketCap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Overview