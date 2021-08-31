import React from "react";
import { Bar } from 'react-chartjs-2';

const RatingChart = () => {
    return (
        <Bar
            data={{
                labels: ['김도현', '김도은', '이재원', '임성국', '김동원', '김용래', '신용준', '이건우'],
                datasets: [{
                    label: 'Ratings',
                    data: [863, 679, 596, 516, 450, 443, 125, 102],
                    backgroundColor: [
                        'rgb(124, 150, 77)',
                        'rgb(163, 54, 88)',
                        'rgb(75, 192, 192)',
                        'rgb(230, 126, 34)',
                        'rgb(52, 152, 219)',
                        'rgb(190, 120, 184)',
                        'rgb(60, 220, 130)',
                        'rgb(120, 40, 220)',
                    ],
                    borderColor: [
                        'rgb(124, 150, 77)',
                        'rgb(163, 54, 88)',
                        'rgb(75, 192, 192)',
                        'rgb(230, 126, 34)',
                        'rgb(52, 152, 219)',
                        'rgb(190, 120, 184)',
                        'rgb(60, 220, 130)',
                        'rgb(120, 40, 220)',
                    ],
                    borderWidth: 1,

                }]
            }}
            options={{
                indexAxis: 'y',
                elements: {
                    bar: {
                        borderWidth: 2,
                    },
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Rating Chart',
                    },
                },
            }}
        />
    )
}

export default RatingChart;
