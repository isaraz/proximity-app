import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const HOSTNAME = 'http://localhost:5000';

export function ProductDetail() {
    const { id } = useParams();
    const [ searchParams ] = useSearchParams();
    const searchParamsObject = Object.fromEntries([...searchParams]);
    const selectedMonth = searchParamsObject.month; 
    const countryID = searchParamsObject.country;
    const [product, setProduct] = useState(null);
    const [country, setCountry] = useState();
    const [monthsInSeason, setMonthsInSeason] = useState();
    const [months, setMonths] = useState([]);

    // Get one item based on ID
  useEffect(() => {
    const getOneProduct = async () => {
      const response = await fetch(`${HOSTNAME}/products/${id}?country=${countryID}&month=${selectedMonth}`);
      const product = await response.json();
      setProduct(product); 
    }

    getOneProduct()
  }, [id, countryID, selectedMonth]); 

   // Get country name based on ID - seems inefficient, but not sure how else to get the info
  useEffect(() => {
    const getCountryName = async () => {
      const response = await fetch(`${HOSTNAME}/countries/${countryID}`);
      const country = await response.json();
      setCountry(country); 
    }

    getCountryName()
  }, [countryID]); 

  // Get months where product is in season in selected country
  useEffect(() => {
    const getMonths = async () => {
      const response = await fetch(`${HOSTNAME}/products/${id}?country=${countryID}`);
      const monthsInSeason = await response.json();
      setMonthsInSeason(monthsInSeason); 
    }

    getMonths()
  }, [id, countryID]); 

  // Create array of only month IDs and remove duplicates
  let monthsArray = monthsInSeason?.map(({MonthID}) => MonthID)
  let noDuplicates = monthsArray?.filter((item, 
    index) => monthsArray.indexOf(item) === index);  

   // Get all months
    useEffect(() => { 
    getMonths();
    }, []);

    const getMonths = async () => {
    const req = await fetch(`${HOSTNAME}/months`);
    const res = await req.json();
    setMonths(res);  
    }; 

    // Filter all months by array of months where product is in season in selected country
    const finalMonths = months?.filter(item => noDuplicates?.includes(item.ID)); 


    // Set season name based on season ID
    let season = <></>
    if (product?.SeasonID === 1) {
        season = <><p>In season</p></>
    } else if (product?.SeasonID === 2) {
        season = <><p>Pre/post season</p></>
    } else {
        season = <><p>Out of season</p></>
    }

  
    return (
    <div>
        <p>Product Detail</p>
        <Link to="/">
              {" "}
              &#171; Home
        </Link>
        {product && country ? (
            <div className="card">
                <h1>{product.Name}</h1>
                {season}
                <p>Months {product.Name} is in season in {country.Name}:</p>
                <div className="grid">
                {finalMonths?.map((month, index) => {
                    return (
                        <div 
                        className={`month ${month.ID == selectedMonth ? "selected" : ""}`} 
                        key={index}>{month.Name}</div>
                    )
                })}
                </div>
            </div>
           


        ) : null}
    </div>
    );
}
