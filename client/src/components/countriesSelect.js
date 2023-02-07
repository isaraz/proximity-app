import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function CountriesSelect ({setSelectedCountryID}) {

  const [countries, setCountries] = useState([])

  useEffect(() => { 
      getCountries();
  }, []);
  
  const getCountries = async () => {
    const req = await fetch(`${HOSTNAME}/countries`);
    const res = await req.json();
    setCountries(res);  
  };

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectedCountryID(event.target.value)
  }

  return (
      <select name="location" id="location" onChange={event => handleChange(event)}>
          {countries.map(country => <option value={country.ID}>{country.Name}</option>)}
      </select>
  );
}

export default CountriesSelect;