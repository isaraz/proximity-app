import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function ProductsList ({countryID, monthID, typeID}) {
console.log("countryid del countriesSelect", countryID)
const [products, setProducts] = useState([])

    useEffect(() => { 
        getProducts();
    }, [countryID, monthID, typeID]); //the component will render when any of these props be modified
    
    const getProducts = async () => {
        const req = await fetch(`${HOSTNAME}/products?country=${countryID}&month=${monthID}&type=${typeID}`);
        const res = await req.json();
        console.log(res);
        setProducts(res);  
    };

    return (
    <div>
        <div class="row">
            {products.map(item => 
                <div class="column" key={item.ID}>
                    <div class="card">{item.Name}</div>
                </div>
            )}
        </div>
    </div>
    );
}

export default ProductsList;