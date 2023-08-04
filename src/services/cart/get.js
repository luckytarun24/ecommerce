import instance from "../instance";

const getCart = () =>
  instance({
    method: "GET",
    url: "/cart",
  });

export { getCart };
