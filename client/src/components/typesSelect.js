import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function TypesSelect ({setSelectedTypeID}) {

const [types, setTypes] = useState([])

    useEffect(() => { 
        getTypes();
      }, []);
    
      const getTypes = async () => {
        const req = await fetch(`${HOSTNAME}/types`);
        const res = await req.json();
        setTypes(res);  
      };

      const handleChange = (event) => {
        console.log(event.target.value)
        setSelectedTypeID(event.target.value)
      }

    return (
        <select name="types" id="types" onChange={event => handleChange(event)}>
            {types.map(type => <option value={type.ID}>{type.Name}</option>)}
        </select>
    );
}

export default TypesSelect;