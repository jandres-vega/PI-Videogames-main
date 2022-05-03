import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllGames, filterByRating} from "../redux/actions/actions";
import '../styles/OrderRating.css'
const OrderRating = () => {

    const dispatch = useDispatch()
    const allGames = useSelector((state) => state.allCopyGames)
    const rating = allGames.map(data => data.rating)
    const orderRating = rating.sort()
    let cont = 0

    function handleFilterByRating(e) {
        dispatch(filterByRating(e.target.value))
    }

    useEffect(() => {
        dispatch(getAllGames())
    },[])
    return (
        <div className="div-order-rating">
            <label>Order By Rating: </label>
            <select onChange={(e) => handleFilterByRating(e)}>
                {orderRating?.map(data => (
                    <option key={cont++} value={data}> {data} </option>
                ))}
            </select>
        </div>
    );
};

export default OrderRating;