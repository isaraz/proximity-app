import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function CountriesSelect () {

const [countries, setCountries] = useState([])

    useEffect(() => { 
        getCountries();
      }, []);
    
      const getCountries = async () => {
        const req = await fetch(`${HOSTNAME}/countries`);
        const res = await req.json();
        console.log(res);
        setCountries(res);  
      };

    return (
        <select name="location" id="location">
            {countries.map(country => <option value={country.ID}>{country.Name}</option>)}
        </select>
    );
}

export default CountriesSelect;