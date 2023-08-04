import instance from "../instance";

const removeFromCart = (productId) =>
  instance({
    method: "PUT",
    url: "/removeProductFromCart",
    data: { productId },
  });

export { removeFromCart };
