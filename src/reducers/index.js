import { combineReducers } from "@reduxjs/toolkit";

import { productDetailsSlice } from "./productDetails";
import { cartSlice } from "./cart";
import { snackBarSlice } from "./snackBar";

export default combineReducers({
  products: productDetailsSlice,
  carts: cartSlice,
  snackBar: snackBarSlice,
});
