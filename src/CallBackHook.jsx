import React, { useCallback } from "react";
import ShippingForm from "./ShippingForm";

const ProductPage = ({productID, referrer, theme}) =>{
    const handleSubmit = useCallback((orderDetails) =>{
        post('/product/' + productID + '/buy/',{
            referrer,
            orderDetails,
        });
    },[productID,referrer])
    return(
        <>
            <div className={theme}>
            <h2>Use Call Back</h2>
            <ShippingForm onSubmit={handleSubmit}/>
            </div>
        </>
    );
}

function post(url,data){
    // imaging this sends a request
    console.log('POST/' + url);
    console.log(data)
}

export default ProductPage 