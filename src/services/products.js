/*
 * @Author: chen yang
 * @Date: 2020-09-12 15:34:21
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-12 15:46:24
 */
const baseUrl = "http://localhost:5000/api/products";

const getAll = async () => {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
};

export default { getAll };
