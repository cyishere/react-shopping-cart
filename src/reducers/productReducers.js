/*
 * @Author: chen yang
 * @Date: 2020-09-12 11:50:32
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-12 12:11:07
 */
import { FETCH_PRODUCTS } from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload };

    default:
      return state;
  }
};
