import instance from "../instance";

const addTCart = (productId) =>
  instance({
    method: "PUT",
    url: "/addProductToCart",
    data: { productId },
  });

export { addTCart };
