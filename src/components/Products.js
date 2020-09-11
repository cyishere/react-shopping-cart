/*
 * @Author: chen yang
 * @Date: 2020-09-11 11:20:51
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-11 21:45:32
 */
import React, { useState } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

const Products = ({ products, addToCart }) => {
  const [productInModal, setProductInModal] = useState(null);

  const openModal = (product) => {
    setProductInModal(product);
  };

  const closeModal = () => {
    setProductInModal(null);
  };

  return (
    <div>
      <Fade bottom cascade>
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={`#${product._id}`} onClick={() => openModal(product)}>
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
      </Fade>

      {productInModal && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="product-details">
              <img src={productInModal.image} alt={productInModal.title} />
              <div className="product-details-description">
                <h2>{productInModal.title}</h2>
                <p>{productInModal.description}</p>
                <p>
                  Avaiable Sizes:{" "}
                  {productInModal.availableSizes.map((size) => (
                    <span>
                      {" "}
                      <button className="button">{size}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>{formatCurrency(productInModal.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      closeModal();
                      addToCart(productInModal);
                    }}
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
