import { createContext, useContext } from "react";
import { products } from "../assets/assets";
const ShopContext = createContext();

export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const value = {
    currency,
    delivery_fee,
    products,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
