import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';


export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="product" key={id}>
            <img src={productImage} alt={productName} />
            <h2><b>{productName}</b></h2>
            <span> ${price}</span>
            <button className="btn-addtocard" onClick ={()=> addToCart(id)} >
                Add To Card {cartItemAmount > 0 && <> ({cartItems[id]}) </>}
            </button>
        </div>
    ) 

}
