import React, { useState, useEffect } from 'react';
import axios from 'axios';
import storedBitFinexResponse from './responseBitfinex.json';

let AverageTickerValue = () => {
    let [averageValue, setAverageValue] = useState("");
   
    useEffect(() => {

        callAverageNumber();

    }, []);

    const callAverageNumber = async () => {

        var usefulArray = [];
        var sumOfTheExistingValues = 0;

        let valueBitstamp = await callBitstamp();
        let valueCoinbase = await callCoinbase();
        let valueBitfinex = callBitfinex();

        //if one of the three values doesn't exist/is not catched, the average will be calculated considering only the present values:
        if (valueBitstamp){
            usefulArray.push(valueBitstamp);
        }
        if (valueCoinbase){
            usefulArray.push(valueCoinbase);
        }
        if (valueBitfinex){
            usefulArray.push(valueBitfinex);
        }

        for (var i = 0; i < usefulArray.length; i++){
            sumOfTheExistingValues += parseFloat(usefulArray[i]);
        }

        var average = sumOfTheExistingValues / usefulArray.length;

        setAverageValue(average.toFixed(2));
    };


    const callBitstamp = async () => {

        try{
            /**************** Call to get the first value... this api returns an object with many values... ******************************/
            let responseBitstamp = await axios.get('https://www.bitstamp.net/api/v2/ticker/btcusd');
            return responseBitstamp.data.last;

        } catch(e){
            console.error(e)
        }

    }

    const callCoinbase = async () => {

        try{
            /**************** Call to get the first value... this api returns an object with many values... ******************************/
            let responseCoinbase = await axios.get('https://api.coinbase.com/v2/exchange-rates?currency=BTC');
           return responseCoinbase.data.data.rates.USD;

        } catch(e){
            console.error(e)
        }

    }
   
    const callBitfinex = /* async */ () => {

        
        /********************************************* Call to get the third value... due to CORS POLICY PROBLEMS THIS ONE WAS A BIT CUMBERSOME! ******************************************** */
        //let responseBitFinex = await axios.get('https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD'); //this API is not working... I have to use imported datas from it (stored as json file inside this project)
        //return responseBitFinex[0][1];

        return storedBitFinexResponse[0][1]; //do I have to take the first value?
       

    }



    return (
       
        <div className='text-center h-20 bg-warning p-3 rounded' style={{ 'marginTop':"30px", "marginBottom":"30px" }}>
            <h2 className='text-primary'>BTC</h2>
            <h2>{averageValue} <span className='text-primary'>USD</span></h2>
        </div>
       
    );
}

export default AverageTickerValue;