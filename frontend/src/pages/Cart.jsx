import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, cartItems } = useShopContext();
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    let tempData = [];
    console.log(cartItems);
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    console.log(tempData);
  }, [cartItems]);
  return <div>Cart</div>;
};

export default Cart;
