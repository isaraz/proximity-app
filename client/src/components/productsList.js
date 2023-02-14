import React from "react";
import { useNavigate } from "react-router-dom";

function ProductsList({products}) {

// Open Product Detail
const navigate = useNavigate();

const openProductDetail = (id) => {
  navigate(`/${id}`);
};

    return (
    <div>
        <div className="row">
            {products.map((item) => {
                return (
                    <div 
                    className="column" 
                    key={item.ID} 
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