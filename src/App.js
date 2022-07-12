import './App.css';
import AverageTickerValue from './components/AverageTickerValues';
import TradingPairs from './components/TradingPairs';



function App() {
  
  return (
    <div className="App">

      <div className="container-fluid clearfix" style={{ "backgroundColor" : "pink", "height": "100vh", "maxHeight" : "100vh" }}>
        <div className="row h-100">
          <div className="col-md-6 col-sm-12 bg-primary align-items-center d-flex justify-content-center flex-column">
            <AverageTickerValue></AverageTickerValue>
           
          </div>


          <div className="col-md-6 col-sm-12 bg-warning">

            
            <div className="row">
              <TradingPairs></TradingPairs>
            </div>
            
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
