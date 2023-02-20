import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const HOSTNAME = 'http://localhost:5000';

export function ProductDetail() {
    const { id } = useParams();
    const [ searchParams ] = useSearchParams();
    const searchParamsObject = Object.fromEntries([...searchParams]);
    const selectedMonth = searchParamsObject.month; 
    const selectedCountry = searchParamsObject.country;
    const [product, setProduct] = useState(null);
    const [country, setCountry] = useState();
    const [monthsInSeason, setMonthsInSeason] = useState();
    const [months, setMonths] = useState([]);

    // Get one item based on ID
  useEffect(() => {
    const getOneProduct = async () => {
      const response = await fetch(`${HOSTNAME}/products/${id}?country=${selectedCountry}&month=${selectedMonth}`);
      const product = await response.json();
      setProduct(product); 
    }

    getOneProduct()
  }, [id, selectedCountry, selectedMonth]); 

   // Get country name based on ID - seems inefficient, but not sure how else to get the info
  useEffect(() => {
    const getCountryName = async () => {
      const response = await fetch(`${HOSTNAME}/countries/${selectedCountry}`);
      const country = await response.json();
      setCountry(country); 
    }

    getCountryName()
  }, [selectedCountry]); 

  // Get months where product is in season in selected country
  useEffect(() => {
    const getMonths = async () => {
      const response = await fetch(`${HOSTNAME}/products/${id}?country=${selectedCountry}`);
      const monthsInSeason = await response.json();
      setMonthsInSeason(monthsInSeason); 
    }

    getMonths()
  }, [id, selectedCountry]); 

  // Create array of only month IDs
  let monthsInSeasonArray = monthsInSeason?.map(({MonthID}) => MonthID) 

   // Get all month names
    useEffect(() => { 
    getMonths();
    }, []);

    const getMonths = async () => {
    const req = await fetch(`${HOSTNAME}/months`);
    const res = await req.json();
    setMonths(res);  
    }; 

    // Filter all months by array of months where product is in season in selected country
    const finalMonths = months?.filter(item => monthsInSeasonArray?.includes(item.ID)); 


    // Set season name based on season ID  - I didn't want to do another fetch just for the seasons
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
                        //adding the class "selected" if it's the current month / month that was selected in the filter
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
