import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GJNumbersView from './GJNumberView';

const TradingPairs = () => {

    let [pairs, setPairs] = useState([]);
    let [pairUrlSymbol, setPairUrlSymbol] = useState("");
    //let [active, setActive] = useState(false);

    useEffect(() => {

        callPairs();

    }, []);


    let callPairs = async () => {

        try {

            let responseFromAxios = await axios.get('https://www.bitstamp.net/api/v2/trading-pairs-info/');
            setPairs(responseFromAxios.data);

        } catch (e) {
            console.error(e);
        }
    }


    // const activeCard = event => {
    //     setActive(active !== active)
    //     // event.target.parentNode.classList.toggle('bg-info');
    // };


    // function colored(event){
    //     let cards = document.querySelectorAll('.custom-card');

    //     cards.forEach(function(card){
    //         card.classList.remove('bg-info')
    //     })

    //     event.target.parentNode.classList.add('bg-info')
    // }

    

    return(

        <div>
            {pairs.length > 0 ? <div>
                <div style={{ "height" : "35vh", 'overflow' : 'auto', 'display' : "flex", "flexWrap" : "wrap", 'marginTop' : "20px" }}>
                    { pairs.map((pair, index) => {
                            // return <div className={active ? "card custom-card bg-info" : "card custom-card"} key={index} onClick={(event) => {setPairUrlSymbol(pair.url_symbol); activeCard(event)}} role="button">
                            return <button className="card custom-card" key={index} onClick={(event) => {setPairUrlSymbol(pair.url_symbol); /*colored(event)*/}}>
                                <div className="card-body">
                                    <h4 className="card-title">{pair.url_symbol}</h4>
                                    <p className="card-text">{pair.name}</p>
                                </div>
                            </button>
                        })
                    }
                </div>

                <div >
                    { pairUrlSymbol && <GJNumbersView pairUrlSymbol={pairUrlSymbol}></GJNumbersView> }
                    { !pairUrlSymbol && <p className='text-center'>Click one of the cards above to render this component </p>}
                </div>
            </div> : <p className='text-center'> Trying to fetch some data. If nothing appears, please reload this page</p>  }
        </div>
    )

}



export default TradingPairs