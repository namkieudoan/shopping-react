import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const {cartItems, addToCart, removeFromCart,updateCartItemCount} = useContext(ShopContext);

    return (
        <div className="wrapper">
            <div className="cartItem" key={id}>
                <img src={productImage} alt={productName}/>
                <div className="cart-content">
                    <span>{productName}</span>
                    <span className="price">${price}</span>
                    <div className="handle-acount">
                        <button className="count-btn" onClick={()=> removeFromCart(id)}> - </button>
                        <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)}/>
                        <button className="count-btn" onClick={()=> addToCart(id)}> + </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
