/*
 * @Author: chen yang
 * @Date: 2020-09-11 11:20:51
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-11 15:09:36
 */
import React from "react";
import formatCurrency from "../util";

const Products = ({ products, addToCart }) => {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={`#${product._id}`}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>

              <div className="product-price">
                <div>{formatCurrency(product.price)}</div>
                <button
                  className="button primary"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
