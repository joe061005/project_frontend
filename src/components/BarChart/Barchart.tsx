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
import { barChartData, sentimentTextMap, updatedStockSentimentMap } from '@/model/model';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

 const options = {
    plugins: {
        title: {
            display: false,
            text: '',
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

interface barChartProp {
    sentimentMap: updatedStockSentimentMap;
}


const barChart: React.FC<barChartProp> = ({sentimentMap}) => {
    const labels = Object.keys(sentimentMap).sort((a,b) => {
        a = a.split('-').reverse().join('');
        b = b.split('-').reverse().join('');
        return a.localeCompare(b)
    })
    const getSentimentTextMap = (): sentimentTextMap => {
        const sentimentTextMap: sentimentTextMap = {
            "Bearish": [],
            "Neutral": [],
            "Bullish": []
        }
        labels.map((date) => {
            const data = sentimentMap[date]
            sentimentTextMap["Bearish"].push(data["Bearish"])
            sentimentTextMap["Neutral"].push(data["Neutral"])
            sentimentTextMap["Bullish"].push(data["Bullish"])
        })
        return sentimentTextMap
    }

    const getDataset = (): barChartData[] => {
        const barChartData: barChartData[] = []
        const sentimentTextMap: sentimentTextMap = getSentimentTextMap()
        Object.keys(sentimentTextMap).map((text) => {
            barChartData.push({
                label: text,
                data: sentimentTextMap[text as keyof sentimentTextMap],
                backgroundColor: text == 'Bearish'? '#cf3c53' : text == "Neutral"? '#3f48cb': '#05a66e'
            })
        })
        return barChartData
    }

    const data = {
        labels,
        datasets: getDataset()
    };

    return <Bar options={options} data={data} />;
}

export default barChart