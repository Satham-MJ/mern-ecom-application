import { createContext, useContext, useState } from "react";
import { products } from "../assets/assets";
const ShopContext = createContext();

export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const value = {
    currency,
    delivery_fee,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
