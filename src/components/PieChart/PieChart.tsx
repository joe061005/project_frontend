"use client";
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { stockSentimentMap } from '@/model/model';

interface pieChartProp {
    sentimentMap: stockSentimentMap
}


const pieChart: React.FC<pieChartProp> = ({ sentimentMap }) => {
    return (
        <PieChart
            data={[
                { title: 'Bearish', value: sentimentMap['Bearish'], color: '#cf3c53' },
                { title: 'Neutral', value: sentimentMap['Neutral'], color: '#3f48cb' },
                { title: 'Bullish', value: sentimentMap['Bullish'], color: '#05a66e' },
            ]}
            style={{
                width: '400px',
                height: '400px'
            }}
            // data={[
            //     {
            //         color: "#E38627",
            //         title: "One",
            //         value: 10,
            //     },
            //     {
            //         color: "#C13C37",
            //         title: "Two",
            //         value: 15,
            //     },
            //     {
            //         color: "#6A2135",
            //         title: "Three",
            //         value: 20,
            //     },
            // ]}
            label={({ x, y, dx, dy, dataEntry }) => (
                <text
                    x={x}
                    y={y}
                    dx={dx}
                    dy={dy}
                    dominant-baseline="central"
                    text-anchor="middle"
                    style={{
                        fill: '#fff', pointerEvents: 'none', fontSize: '4px'
                    }}>
                        {
                            dataEntry.value > 0? 
                            <>
                            <tspan x={x+5} y={y} dx={dx} dy={dy}>{dataEntry.title}</tspan>
                            <tspan x={x+5} y={y+5} dx={dx} dy={dy}>{`${Math.round(dataEntry.percentage)}%`}</tspan>
                            </>:
                            <>
                            </>
                        }
                </text>
            )}

            lengthAngle={-360} 
            animate
  
            // animate
            // animationDuration={40}
            // animationEasing="ease-in"
            // center={[50, 50]}
            // lineWidth={15}
            // lengthAngle={360}
            // paddingAngle={0}
            // radius={50}
            // rounded
            // startAngle={0}
            // viewBoxSize={[100, 100]}
            // labelStyle={{
            //     fontSize: "6px",
            //     color: "FFFFFA",
            //     fontWeight: "500",
            //     fontFamily: "monospace"
            // }}
            // label={(data) => data.dataEntry.title}
            // labelPosition={70}
        />
    )
}

export default pieChart