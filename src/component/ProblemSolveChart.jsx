import React from "react";
import { Line } from 'react-chartjs-2';
import './ProblemSolveChart.css';

const ProblemSolveChart = () => {
    return (
        <Line
            data={{
                labels: ['06.24', '07.08', '07.22', '08.05', '08.19', '08.31'],
                datasets: [{
                    label: '이재원',
                    data: [0, 20, 51, 73, 132, 152],
                    fill: false,
                    borderColor: 'rgb(124, 150, 77)',
                    tension: 0.1
                },
                {
                    label: '김동원',
                    data: [0, 32, 54, 65, 128, 128],
                    fill: false,
                    borderColor: 'rgb(163, 54, 88)',
                    tension: 0.1
                },
                {
                    label: '김도현',
                    data: [0, 42, 68, 95, 115, 127],
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: '김용래',
                    data: [9, 29, 55, 75, 100, 114],
                    fill: false,
                    borderColor: 'rgb(230, 126, 34)',
                    tension: 0.1
                },
                {
                    label: '임성국',
                    data: [2, 59, 71, 80, 90, 105],
                    fill: false,
                    borderColor: 'rgb(52, 152, 219)',
                    tension: 0.1
                },
                {
                    label: '김도은',
                    data: [3, 31, 57, 70, 76, 92],
                    fill: false,
                    borderColor: 'rgb(190, 120, 184)',
                    tension: 0.1
                },
                {
                    label: '이건우',
                    data: [1, 13, 21, 32, 48, 60],
                    fill: false,
                    borderColor: 'rgb(60, 220, 130)',
                    tension: 0.1
                },
                {
                    label: '신용준',
                    data: [0, 7, 22, 26, 27, 27],
                    fill: false,
                    borderColor: 'rgb(120, 40, 220)',
                    tension: 0.1
                }
                ]
            }}
            options={{ maintainAspectRatio: true }}
        />
    )
}

export default ProblemSolveChart;
