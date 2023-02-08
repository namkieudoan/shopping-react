import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product"
import "./shop.css"

function Shop() {
    return ( 
        <div className="wrapper">
            <div className="shop-title">
                <h1 className="text-4xl"> NamKieu Shop </h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product)=> (
                    <Product data = {product} />
                ))}
            </div>
        </div>
    );
}

export default Shop;