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
            {/* Added a default empty value here because the drop down wasn't selecting the first option properly when it first loaded - but I think there is a better way to do this in react, just didn't have time to look more into it*/}
            <option selected="true" disabled="disabled">--</option>
            {types.map(type => <option key={type.ID} value={type.ID}>{type.Name}</option>)}
        </select>
    );
}

export default TypesSelect;