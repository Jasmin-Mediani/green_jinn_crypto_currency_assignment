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
      labels: ['0', '10', '20', '30', '40', '50', '60'],  //ogni 10 secondi... 10, 20, 30, 40 ecc...
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

              let response = await axios.get('https://www.bitstamp.net/api/v2/ticker/btcusd');

              setChartData((prevChartData) => {
              var labelsLastTenSeconds = prevChartData.labels[prevChartData.labels.length-1] + 10;

              //if the labels are > 9 clear the interval;
              if (prevChartData.datasets[0].data.length > 6){ // 6 is 60 seconds
                prevChartData.datasets[0].data.pop(); //I remove the last element of the new array
              }

              return { //setState has a lambda which automatically takes the previous state as argument
              labels: prevChartData.labels, //every 10 seconds... 10, 20, 30, 40 etc...
              datasets: [{
                  label: prevChartData.datasets[0].label,
                  data: [response.data.last, ...prevChartData.datasets[0].data], //I prepended the new value to have it on the right of the chart, the X axe will be inverted so It will be the first value on the right 
                  
                  borderColor: prevChartData.datasets[0].borderColor,
                  backgroundColor: prevChartData.datasets[0].backgroundColor, 
              }],
          }});
            
        }, 10000);
        
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
             display: false
            },
            title: {
              display: false,
              text: "Testo prova"
            }
          },

          //I Inverted the X axe to have the chart readable (from right to left);
          scales: {
            x: {
                reverse: true,
  
            }
          }

        })
    }, []);


   


    return (
        <div className="clearfix h-30" style={{ "marginTop" : "30px", "margin" : "30px auto 0px auto"}}>
            <Line options={chartOptions} data={chartData} style={{ "height" : "25vh"}}/>
        </div>
    )
}

export default Chart