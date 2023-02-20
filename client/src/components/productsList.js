import React from "react";
import { useNavigate } from "react-router-dom";

function ProductsList({ products, selectedCountry, selectedMonth }) {

// Open Product Detail
const navigate = useNavigate();

const openProductDetail = (id) => {
  navigate(`/${id}?country=${selectedCountry}&month=${selectedMonth}`);
};

    return (
    <div>
        <div className="row">
            {products.map((item, index) => {
                return (
                    <div 
                    className="column" 
                    key={index} 
                    onClick={() => openProductDetail(item.ID)}>
                        <div className="card">{item.Name}</div>
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default ProductsList;