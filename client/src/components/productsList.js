import React, { useEffect, useState } from "react";

const HOSTNAME = 'http://localhost:5000';


function ProductsList ({countryID, monthID, typeID}) {
//console.log("countryid del countriesSelect", countryID)
const [products, setProducts] = useState([]);

    // Get all products
    useEffect(() => {
        const getAllProducts = async () => {
          const response = await fetch(`${HOSTNAME}/products`);
          const products = await response.json();
          setProducts(products); 
          console.log(products);
        }
    
        getAllProducts()
      }, []);
   

    // Filter products
    useEffect(() => { 
        getMatchingProducts();
    }, [countryID, monthID, typeID]); //the component will render when any of these props be modified
    
    const getMatchingProducts = async () => {
        const req = await fetch(`${HOSTNAME}/products/filter?country=${countryID}&month=${monthID}&ProductType=${typeID}`);
        const res = await req.json();
        console.log(res);
        setProducts(res);  
    };

    return (
    <div>
        <div className="row">
            {products.map((item) => {
                return (
                    <div className="column" key={item.ID}>
                    <div className="card">{item.Name}</div>
                </div>
                );
            })}
        </div>
    </div>
    );
}

export default ProductsList;