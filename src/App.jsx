import IndexHeader from "@/components/header/IndexHeader";
import IndexProduct from "./components/product/IndexProduct";

import CartDetailProvider from '@/context/useCartDetailCTX'

const App = () => {
  return (
    <CartDetailProvider>
      <IndexHeader />
      <IndexProduct />
    </CartDetailProvider>
  );
};

export default App;