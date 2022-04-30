import React from 'react';
import '../styles/OrderByAscDes.css'
const OrderByAscDes = () => {
    return (
        <div className="div-order">
            <label>Order BY: </label>
            <select>
                <option>A - Z</option>
                <option>Z - A</option>
            </select>
        </div>
    );
};

export default OrderByAscDes;