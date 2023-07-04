'use client';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react'
import { stockSentimentMap } from '@/model/model';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [1, 2 ,3],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: [2, 3, 4],
            backgroundColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Dataset 3',
            data: [5, 6 , 7],
            backgroundColor: 'rgb(53, 162, 235)',
        },
    ],
};

// interface barChartProp {
//     sentimentMap: stockSentimentMap
// }

// : React.FC<barChartProp>

const barChart = () => {
    return <Bar options={options} data={data} />;
}

export default barChart