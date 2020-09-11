/*
 * @Author: chen yang
 * @Date: 2020-09-11 11:31:49
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-11 13:00:39
 */
import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const filterProducts = (event) => {
    const theValue = event.target.value;
    setSize(theValue);
    if (theValue === "") {
      setProducts(data.products);
    } else {
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(theValue) >= 0
        )
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
            <Products products={products} />
          </div>

          <div className="sidebar">Cart Items</div>
        </div>
      </main>

      <footer>All right is reserved.</footer>
    </div>
  );
};

export default App;
