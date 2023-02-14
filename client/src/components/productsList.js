import React from "react";

function ProductsList ({products}) {

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