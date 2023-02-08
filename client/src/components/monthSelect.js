import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function MonthsSelect ({setSelectedMonthID}) {

  const [months, setMonths] = useState([])

  useEffect(() => { 
      getMonths();
    }, []);
  
  const getMonths = async () => {
    const req = await fetch(`${HOSTNAME}/months`);
    const res = await req.json();
    setMonths(res);  
  };
    
  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectedMonthID(event.target.value)
  }

  return (
      <select name="months" id="months" onChange={event => handleChange(event)}>
          {months.map(month => <option value={month.ID}>{month.Name}</option>)}
      </select>
  );
}

export default MonthsSelect;