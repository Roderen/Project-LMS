import React from 'react';
import {
 ArcElement, Chart as ChartJS, Legend, Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = [5, 15, 80];

  const dataChart = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut data={dataChart} />
  );
}

export default DoughnutChart;
