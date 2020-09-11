/*
 * @Author: chen yang
 * @Date: 2020-09-11 11:31:49
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-11 11:47:20
 */
import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products";

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>

      <main>
        <div className="content">
          <div className="main">
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
