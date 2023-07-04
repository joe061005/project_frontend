'use client';

import React from 'react'
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
import { StockDetails } from '@/model/model';

interface stockDetailTableProp {
    detail: StockDetails[]
}

const StockDetailTable: React.FC<stockDetailTableProp> = ({ detail }) => {
    return (
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
                    {detail.map((row) => (
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
                                <Image src={`${row.ImageURL}`} alt='' width={30} height={30} />
                                <p className='font-bold'>{row.Ticker}</p>
                                <p className='text-gray-400'>{row.Name}</p>
                            </TableCell>
                            <TableCell>${`${row.LatestPrice}`}</TableCell>
                            <TableCell sx={{
                                color: `${(Math.round(((row.LatestPrice - row.PrevPrice) / row.PrevPrice * 100) * 100) / 100) < 0 ? '#cf3c53' : '#05a66e'}`
                            }} >
                                {Math.round(((row.LatestPrice - row.PrevPrice) / row.PrevPrice * 100) * 100) / 100 > 0 ? '+' : ''}{Math.round(((row.LatestPrice - row.PrevPrice) / row.PrevPrice * 100) * 100) / 100}%
                            </TableCell>
                            <TableCell >{millify(row.Volume)}</TableCell>
                            <TableCell>${millify(row.MarketCap)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StockDetailTable