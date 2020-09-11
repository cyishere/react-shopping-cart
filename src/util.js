/*
 * @Author: chen yang
 * @Date: 2020-09-11 12:05:57
 * @Last Modified by:   chen yang
 * @Last Modified time: 2020-09-11 12:05:57
 */
const formatCurrency = (num) => {
  return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
};

export default formatCurrency;
