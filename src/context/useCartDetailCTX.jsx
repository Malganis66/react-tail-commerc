import { createContext } from "react";
import { useState } from "react";

export const useCartDetail = createContext();

export default (props) => {
  const [CartProducts, setCartProducts] = useState([]);

  const addCartProducts = (product) => {
    if (CartProducts.length === 0) {
      return setCartProducts([...CartProducts, product]);
    }
    setCartProducts(
      CartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };
  const ridCartProducts = (id) => {
    setCartProducts(CartProducts.filter((item) => item.id !== id));
  };

  const notificationCartProduct = CartProducts.reduce(
    (prev, current) => current.quantity + prev, 0
  );

  return (
    <useCartDetail.Provider
      value={{ CartProducts, addCartProducts, ridCartProducts, notificationCartProduct }}
    >
      {props.children}
    </useCartDetail.Provider>
  );
};
