import { render } from "@testing-library/react";
import {useEffect, React, useState} from "react";
import axios from "axios";
import Chart from "./Chart"

const SelectedCurrencyPair = ({pairUrlSymbol}) => {

    let [object, setObject] = useState({});

    useEffect(() => {

        callApiWithUrlSymbol(pairUrlSymbol);

    }, [pairUrlSymbol]);



    
    let callApiWithUrlSymbol = async (pairUrlSymbol) => {

        try {

            let response = await axios.get(`https://www.bitstamp.net/api/v2/ticker/${pairUrlSymbol}`);

           setObject(response.data)

        //    console.log(object);

        } catch (e) {
            console.error(e);
        }
    }



    return (
        object !== "" ? 
            <div>
                <div className="card" id="card">
                    <h3 className="text-center">{pairUrlSymbol}</h3>
                    <div className="card-body d-flex flex-row justify-content-between">
                        <div className="d-flex justify-content-between flex-column mr-2">
                            <h5 className="card-title">high: {object.high}</h5>
                            <h5 className="card-title">ask: {object.ask}</h5>
                            <h5 className="card-title">bid: {object.bid}</h5>
                            <h5 className="card-title">last: {object.last}</h5>
                        </div>
                        <div className="d-flex flex-column ml-2">
                            <h5 className="card-title">low: {object.low}</h5>
                            <h5 className="card-title">open: {object.open}</h5>
                            <h5 className="card-title">vwap: {object.vwap}</h5>
                            <h5 className="card-title">volume: {object.volume}</h5>
                        </div>
                    </div>
                </div>

                <Chart></Chart>
            </div>

           
        : 
        <div></div>
    )

}

export default SelectedCurrencyPair


