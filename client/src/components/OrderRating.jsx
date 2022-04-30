import React from 'react';
import '../styles/OrderRating.css'
const OrderRating = () => {
    return (
        <div className="div-order-rating">
            <label>Order By Rating: </label>
            <select>
                <option>Opcion1</option>
                <option>Opcion2</option>
                <option>Opcion3</option>
            </select>
        </div>
    );
};

export default OrderRating;