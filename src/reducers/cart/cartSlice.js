import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cartDetails",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image, count } = action.payload;

      state.total = +(state.total + price * (count ? count : 1)).toFixed(2);

      const isExist = state.cart.find((data) => data.id === id);
      if (isExist) {
        state.cart.map((data) => {
          if (data.id === id) {
            data.count += count ? count : 1;
          }
          return data;
        });
        return;
      }

      state.cart.push({
        id,
        name: title,
        price,
        image,
        count: count ? count : 1,
      });
    },
    addCountCart: (state, action) => {
      const { id, count } = action.payload;
      const isExist = state.cart.filter((data) => data.id === id)[0];

      if (isExist) {
        state.total = +(
          state.total +
          isExist.price * (count ? count : 1)
        ).toFixed(2);

        state.cart.map((data) => {
          if (data.id === id) {
            data.count += count ? count : 1;
          }
          return data;
        });
        return;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const cart = state.cart.filter((data) => data.id === id)[0];
      state.total = +(state.total - cart.price * cart.count).toFixed(2);
      const index = state.cart.findIndex((product) => product.id === id);
      state.cart.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addCountCart } = cartSlice.actions;

export default cartSlice.reducer;
