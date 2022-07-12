import { render } from "@testing-library/react";
import {useEffect, React, useState} from "react";
import axios from "axios";
import Chart from "./Chart"
import GJNumberLabel from "./GJNumberLabel";

const GJNumbersView = ({pairUrlSymbol}) => {

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
                            <GJNumberLabel string="high" value={object.high}></GJNumberLabel>
                            <GJNumberLabel string="ask" value={object.ask}></GJNumberLabel>
                            <GJNumberLabel string="bid" value={object.bid}></GJNumberLabel>
                            <GJNumberLabel string="last" value={object.last}></GJNumberLabel>
                        </div>
                        <div className="d-flex flex-column ml-2">
                            <GJNumberLabel string="low" value={object.low}></GJNumberLabel>
                            <GJNumberLabel string="open" value={object.open}></GJNumberLabel>
                            <GJNumberLabel string="vwap" value={object.vwap}></GJNumberLabel>
                            <GJNumberLabel string="volume" value={object.volume}></GJNumberLabel>
                        </div>
                    </div>
                </div>

                <Chart></Chart>
            </div>

           
        : 
        <div></div>
    )

}

export default GJNumbersView


