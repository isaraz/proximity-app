import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function MonthsSelect () {

const [months, setMonths] = useState([])

    useEffect(() => { 
        getMonths();
      }, []);
    
      const getMonths = async () => {
        const req = await fetch(`${HOSTNAME}/months`);
        const res = await req.json();
        setMonths(res);  
      };

    return (
        <select name="months" id="months">
            {months.map(months => <option value={months.ID}>{months.Name}</option>)}
        </select>
    );
}

export default MonthsSelect;