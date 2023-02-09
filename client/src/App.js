import React, { useState } from "react";
import './App.css';
import CountriesSelect from './components/countriesSelect';
import MonthsSelect from './components/monthSelect';
import TypesSelect from './components/typesSelect';
import ProductsList from './components/productsList';


function App() {

  const [selectedCountryID, setSelectedCountryID] = useState()
  const [selectedMonthID, setSelectedMonthID] = useState()
  const [selectedTypeID, setSelectedTypeID] = useState()

  const handleSubmit= () => {
    console.log("submit")
  }

  return (
    <div className="App">
      <h1>Find in season products in your area</h1>
      <div className='container'>
        <label> Select your country </label>
          <div className='location_container'>
            <CountriesSelect setSelectedCountryID={setSelectedCountryID}/> 
          </div>
        <label> Select a month </label>
        <div className='months_container'>
          <MonthsSelect setSelectedMonthID={setSelectedMonthID}/>
        </div>
        <label> Select a product type  </label>
        <div className='types_container'>
          <TypesSelect setSelectedTypeID={setSelectedTypeID}/>
        </div>
        <div className='submit'>
          <button className='submit_btn' onClick={handleSubmit}>Find products</button>
        </div>
      </div>
      {selectedCountryID && <ProductsList countryID={selectedCountryID} monthID={selectedMonthID} typeID={selectedTypeID} />}
    </div>
  );
}

export default App;
