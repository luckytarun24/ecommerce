import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/data";

const initialState = data.map((product, index) => ({
  ...product,
  id: index + 1,
}));

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: initialState,
  reducers: {
    add: (state) => {
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
