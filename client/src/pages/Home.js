import React, { useEffect, useState }  from "react";
import CountriesSelect from '../components/countriesSelect';
import MonthsSelect from '../components/monthSelect';
import TypesSelect from '../components/typesSelect';
import ProductsList from '../components/productsList';

const HOSTNAME = 'http://localhost:5000';

export function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState();
  const [selectedMonthID, setSelectedMonthID] = useState();
  const [selectedTypeID, setSelectedTypeID] = useState();
  const [searchClicked, setSearchClicked] = useState(false); 
  
  /*
  // Get all products
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch(`${HOSTNAME}/products`);
      const products = await response.json();
      setProducts(products); 
    }

    getAllProducts()
  }, []);
  */


  // Filter products
  async function handleSearch() {
      const response = await fetch(`${HOSTNAME}/products/filter?country=${selectedCountryID}&month=${selectedMonthID}&productType=${selectedTypeID}`);
      const products = await response.json();
      console.log(products);
      setProducts(products);  
      setSearchClicked(true); 
  };

  // Show error & loading states
  let state = <></>
  if (selectedCountryID && selectedMonthID && selectedTypeID && searchClicked && products?.length === 0) {
    state = <><p>No items matched your search 😟 Why not try a different month or product type?</p></>;
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
      <div>
        { !selectedCountryID && !selectedMonthID && !selectedTypeID ? (<p>Select a filter from the list above</p>) : <ProductsList products={products} selectedCountry={selectedCountryID} selectedMonth={selectedMonthID}/> }
        {state}
      </div>
    </div>
  );
}
