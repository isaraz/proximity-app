// import React, { useEffect, useState } from "react";

// const HOSTNAME = 'http://localhost:5000';


// function Select ({categoryInput, setCategories, name, id}) {


//     useEffect(() => { 
//         getInputs();
//       }, []);
    
//       const getInputs = async () => {
//         const req = await fetch(`${HOSTNAME}/${categoryInput}`);
//         const res = await req.json();
//         console.log(res);
//         setCategories(res);  
//       };

//     return (
//         <select name={name} id={id}>
//             {categories.map(category => <option value={category.ID}>{category.Name}</option>)} 
//         </select>
//     );
// }

// export default Select;