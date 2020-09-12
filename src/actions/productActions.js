/*
 * @Author: chen yang
 * @Date: 2020-09-12 11:50:35
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-12 14:55:29
 */
import { FETCH_PRODUCTS } from "../types";

const baseUrl = "http://localhost:5000/api/products";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch(baseUrl);
  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
