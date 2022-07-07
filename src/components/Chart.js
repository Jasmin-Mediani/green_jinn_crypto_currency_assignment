import React, {useState, useEffect} from "react";


/*************** LINE CHART *************** */

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

/*********************  BAR CHART ************************ */

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
  
//   import {Bar} from "react-chartjs-2"
  
//   ChartJS.register(CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend)

/****************************************************** */

const Chart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
      });
    
      const [chartOptions, setChartOptions] = useState({})
    
      useEffect(() =>{
    
        setChartData({
          labels: ["John", "Kevin", "George", "Michael", "Jasmin"],
          datasets: [{
            label: "Testo prova",
            data: [12, 55, 34, 120, 720],
            borderColor: "rgb(80, 132, 135)",
            backgroundColor: "rgba(80, 132, 135, 0.4)",
          }],
        });
        
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              height: "150px",
            },
            title: {
              display: true,
              text: "Testo prova"
            }
          }
        })
      }, [])

    return (
        <div className="clearfix h-30" style={{ "marginTop" : "30px", "margin" : "30px auto 0px auto"}}>
            {/* <Bar options={chartOptions} data={chartData} style={{ "height" : "300px"}}/> */}
            <Line options={chartOptions} data={chartData} style={{ "height" : "25vh"}}/>
        </div>
    )
}

export default Chart