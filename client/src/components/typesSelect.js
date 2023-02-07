import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function TypesSelect () {

const [types, setTypes] = useState([])

    useEffect(() => { 
        getTypes();
      }, []);
    
      const getTypes = async () => {
        const req = await fetch(`${HOSTNAME}/types`);
        const res = await req.json();
        setTypes(res);  
      };

    return (
        <select name="types" id="types">
            {types.map(types => <option value={types.ID}>{types.Name}</option>)}
        </select>
    );
}

export default TypesSelect;