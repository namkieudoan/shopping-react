import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../product";
import { CartItem } from "./cart-item";
import {useNavigate} from "react-router-dom";
import "./cart.css"


function Cart() {
    const {cartItems,getTotalCountAmount} = useContext(ShopContext);
    const navigate = useNavigate()
    let totalAmount = getTotalCountAmount();
    return (
        <div className="wrapper">
            <div className="carts">
                <div className="cart-title"><h1>Your Cart Items</h1></div>
                <div className="cart-list">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />
                        }
                    })}
                </div>
            </div>
            <div className="Checkout">
        {totalAmount > 0 ? 
            <>
                <span> Tổng : ${totalAmount}</span>
                <button className="btn" onClick={()=> navigate("/")}>Continute Shopping</button>
                <button className="btn" onClick={()=> navigate("/checkout")}>Checkout</button>    
            </>
        :
                <p>Your cart is empty</p>
        }
            </div>
        </div> 
     );
}

export default Cart;