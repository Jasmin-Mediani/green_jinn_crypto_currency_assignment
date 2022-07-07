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
                <div className="card">
                    <h3 className="text-center">{pairUrlSymbol}</h3>
                    <div className="card-body d-flex flex-row justify-content-between">
                        <div className="d-flex justify-content-between flex-column">
                            <h5 className="card-title" style={{ "width" : "400px" }}>high: {object.high}</h5>
                            <h5 className="card-title" style={{ "width" : "400px" }}>ask: {object.ask}</h5>
                            <h5 className="card-title" style={{ "width" : "400px" }}>bid: {object.bid}</h5>
                            <h5 className="card-title" style={{ "width" : "400px" }}>last: {object.last}</h5>
                        </div>
                        <div className="d-flex justify-content-end flex-column align-items-end">
                            <h5 className="card-title" style={{ "width" : "400px" }}>low: {object.low}</h5>
                            <h5 className="card-title" style={{ "width" : "400px" }}>open: {object.open}</h5>
                            <h5 className="card-title" style={{ "width" : "400px" }}>vwap: {object.vwap}</h5>
                            <h5 className="card-title" style={{ "width" : "400px" }}>volume: {object.volume}</h5>
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


