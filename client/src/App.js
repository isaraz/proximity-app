import React, { useEffect, useState }  from "react";
import './App.css';
import CountriesSelect from './components/countriesSelect';
import MonthsSelect from './components/monthSelect';
import TypesSelect from './components/typesSelect';
import ProductsList from './components/productsList';

const HOSTNAME = 'http://localhost:5000';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState()
  const [selectedMonthID, setSelectedMonthID] = useState()
  const [selectedTypeID, setSelectedTypeID] = useState()
  
  // Get all products
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch(`${HOSTNAME}/products`);
      const products = await response.json();
      setProducts(products); 
    }

    getAllProducts()
  }, []);

  // Filter products
  async function handleSearch() {
      const response = await fetch(`${HOSTNAME}/products/filter?country=${selectedCountryID}&month=${selectedMonthID}&productType=${selectedTypeID}`);
      const products = await response.json();
      console.log(products);
      setProducts(products);  
  };


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
        <button onClick={handleSearch}>Search</button>
      </div>
      {/*{selectedCountryID && selectedMonthID && selectedTypeID && <ProductsList countryID={selectedCountryID} monthID={selectedMonthID} typeID={selectedTypeID} />}*/}
      {products.length !== 0 ? (<div className="row">
              {products.map((item) => {
                  return (
                      <div className="column" key={item.ID}>
                      <div className="card">{item.Name}</div>
                  </div>
                  );
              })}
        </div>) : (<p>No products matched your search 😔</p>)}  
    </div>
  );
}

export default App;
