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
          {/* Added a default empty value here because the drop down wasn't selecting the first option properly when it first loaded - but I think there is a better way to do this in react, just didn't have time to look more into it*/}
          <option selected={true} disabled="disabled">--</option>
          {countries.map(country => <option key={country.ID} value={country.ID}>{country.Name}</option>
          )}
      </select>
  );
}

export default CountriesSelect;