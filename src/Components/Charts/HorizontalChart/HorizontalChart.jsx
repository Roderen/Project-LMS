import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
 BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,
} from 'chart.js';
import { useGetUsersQuery } from '../../../store/api/api';

function HorizontalChart() {
  const { isLoading, data } = useGetUsersQuery();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const chartData = () => ({
    labels: data.map(({ firstName }) => firstName),
    datasets: [
      {
        data: data.map(({ average }) => average),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(25, 118, 210, 1)',
      },
    ],
  });

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: '',
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 10,
      },
    },
  };

  return (
    <div>
      {isLoading ? <div>Loading...</div> : (
        <Bar options={options} data={chartData()} height={400} />
      )}
    </div>
  );
}

export default HorizontalChart;
