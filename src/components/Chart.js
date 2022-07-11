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
import axios from "axios";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const Chart = () => {

    const [chartData, setChartData] = useState({
      labels: [0],  //ogni 10 secondi... 10, 20, 30, 40 ecc...
      datasets: [{
          label: "Testo",
          data: [],
          
          borderColor: "rgb(80, 132, 135)",
          backgroundColor: "rgba(80, 132, 135, 0.4)",
      }],
  });

    const [values, setValues] = useState([]);

    // let datasetArrayFromInterval = [];
    
    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() =>{

        const interval = setInterval( async function(){

            //the array will show only the last 10 values. Every 10 values it becomes empty.
            // if (datasetArrayFromInterval.length = 10){
            //     datasetArrayFromInterval = [];
            // }
    
            //let response = axios.get('https://www.bitstamp.net/api/v2/ticker/btcusd');
            
            //let ArrayPerChartData = [];
            //while (ArrayPerChartData.length < 10) {

              let response = await axios.get('https://www.bitstamp.net/api/v2/ticker/btcusd');
              ;

            setChartData((prevChartData) => {
              var labelsLastTenSeconds = prevChartData.labels[prevChartData.labels.length-1] + 10;

              console.log(prevChartData.labels)

              return { //setState has a lambda which automatically takes the previous state as argument
              labels: [...prevChartData.labels, labelsLastTenSeconds], //every 10 seconds... 10, 20, 30, 40 etc...
              datasets: [{
                  label: prevChartData.datasets[0].label,
                  data: [...prevChartData.datasets[0].data, response.data.last],
                  
                  borderColor: prevChartData.datasets[0].borderColor,
                  backgroundColor: prevChartData.datasets[0].backgroundColor,
              }],
          }});
            
        }, 5000);
        
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
    }, []);


   


    return (
        <div className="clearfix h-30" style={{ "marginTop" : "30px", "margin" : "30px auto 0px auto"}}>
            {/* <Bar options={chartOptions} data={chartData} style={{ "height" : "300px"}}/> */}
            <Line options={chartOptions} data={chartData} style={{ "height" : "25vh"}}/>
        </div>
    )
}

export default Chart