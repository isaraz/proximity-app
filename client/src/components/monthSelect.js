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
        {/* Added a default empty value here because the drop down wasn't selecting the first option properly when it first loaded - but I think there is a better way to do this in react, just didn't have time to look more into it*/}
        <option selected="true" disabled="disabled">--</option>
          {months.map(month => <option key={month.ID} value={month.ID}>{month.Name}</option>)}
      </select>
  );
}

export default MonthsSelect;