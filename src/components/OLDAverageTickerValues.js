import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import response2 from './response.json';
import storedResponse3 from './response3.json';

let EXAverageTickerValue = () => {
    let [averageValue, setAverageValue] = useState("");
   
    useEffect(() => {

        callAverageNumber();

    }, []);

    const callAverageNumber = async () => {
        let sumForThirdAverageNumber = 0;
        let sumForFirstAverageNumber = 0;
        let firstAverageNumber = 0;
        let secondAverageNumber = 0;
        let thirdAverageNumber = 0;
        let usefulArray = [];
        let arrayToCalculateTheAverageFinalNumber = [];

        try {
            
            //Call to get the first value... this api returns an object with many values...
            let response1 = await axios.get('https://www.bitstamp.net/api/v2/ticker/btcusd');
            let dataValues = response1.data;
            let objectLength = Object.keys(dataValues).length;
                        
                //... so I'll search the average between all its values:
                for (var singleNumber in dataValues){
                    sumForFirstAverageNumber += parseFloat(dataValues[singleNumber]);   // ...which is something like: 16572535....
                }
               
                firstAverageNumber = sumForFirstAverageNumber / objectLength;
                // console.log('firstAverageNumber', firstAverageNumber)


            /********************* Call to get the second value **************************************************/
            let response2 = await axios.get('https://api.coinbase.com/v2/exchange-rates?currency=BTC');
            let value2 = response2.data.data.rates.BTC;  //devo prendere USD??
            secondAverageNumber = value2;
            // console.log('val2', value2)



            /********************************************* Call to get the third value... due to CORS POLICY PROBLEMS THIS ONE WAS A BIT CUMBERSOME! ******************************************** */
        
            // let oldResponse = await axios.get('api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD'); // I have to comment this out and use a stored version of this API because it's not working... there are CORS POLICY PROBLEMS TO BE FIXED BACKEND SIDE
            // console.log('tentativo', oldResponse)

            let value3 = storedResponse3[0]; 
            
            //Since in console.log it's always printing twice, I want to make sure that I don't get the values twice... so I create an empty array and push the values only if they are not already there;
            for (var i = 1; i < value3.length; i++){ //I start from 1 so I don't push the string value sitting on top, at position 0
                if (!usefulArray.includes(value3[i]))
                usefulArray.push(value3[i]);
            }

            //Now that I have the right values I'll find the average:
            for (var j = 0; j < usefulArray.length; j++){
                thirdAverageNumber += usefulArray[j];
            }

            // console.log('thirdNUmber', thirdAverageNumber);

            //If these values exist i push them into an array, to avoid the repetition that I seem to have in this project the whole time... 
            if (firstAverageNumber && secondAverageNumber  && thirdAverageNumber ) {
                arrayToCalculateTheAverageFinalNumber.push(firstAverageNumber)
                arrayToCalculateTheAverageFinalNumber.push(secondAverageNumber)
                arrayToCalculateTheAverageFinalNumber.push(thirdAverageNumber)
            }

            console.log('finalArray', arrayToCalculateTheAverageFinalNumber)

            for (var k = 0; k < arrayToCalculateTheAverageFinalNumber.length; k++){
                var singleNum = parseFloat(arrayToCalculateTheAverageFinalNumber[k]);

                sumForThirdAverageNumber+= singleNum;
            }
            
            averageValue = sumForThirdAverageNumber/3;
            // console.log('finalAverageValue', averageValue);
            setAverageValue(averageValue)


        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p>{averageValue}</p>
        </div>
    );
}

export default EXAverageTickerValue;