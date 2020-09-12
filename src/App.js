/*
 * @Author: chen yang
 * @Date: 2020-09-11 11:31:49
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-12 15:46:46
 */
import React, { useState, useEffect } from "react";
// import data from "./data.json";
import productService from "./services/products";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

const App = () => {
  let localProducts = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  const [initProducts, setInitProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(localProducts);

  useEffect(() => {
    productService.getAll().then((allProducts) => {
      setInitProducts(allProducts);
      setProducts(allProducts);
    });
  }, []);

  const createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };

  const addToCart = (product) => {
    const itemsInCart = [...cartItems];
    let alreadyInCart = false;

    itemsInCart.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      itemsInCart.push({ ...product, count: 1 });
    }

    setCartItems(itemsInCart);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeFromCart = (product) => {
    const itemsInCart = [...cartItems];

    const cartItemsRemain = itemsInCart.filter(
      (item) => item._id !== product._id
    );

    setCartItems(cartItemsRemain);

    localStorage.setItem("cartItems", JSON.stringify(cartItemsRemain));
  };

  const filterProducts = (event) => {
    const theValue = event.target.value;
    setSize(theValue);
    if (theValue === "") {
      setProducts(initProducts);
      // setProducts(data.products);
    } else {
      setProducts(
        initProducts.filter(
          (product) => product.availableSizes.indexOf(theValue) >= 0
        )
        // data.products.filter(
        //   (product) => product.availableSizes.indexOf(theValue) >= 0
        // )
      );
    }
  };

  const sortProducts = (event) => {
    const theValue = event.target.value;

    setSort(theValue);

    setProducts(
      products
        .slice()
        .sort((a, b) =>
          theValue === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : theValue === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        )
    );
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>

      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            {products.length === 0 ? (
              <div className="center">Loading...</div>
            ) : (
              <Products products={products} addToCart={addToCart} />
            )}
          </div>

          <div className="sidebar">
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              createOrder={createOrder}
            />
          </div>
        </div>
      </main>

      <footer>All right is reserved.</footer>
    </div>
  );
};

export default App;
