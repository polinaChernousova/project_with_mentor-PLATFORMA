import React from "react";
import Header from "./components/Header";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MyRoutes from "./MyRoutes";
const App = () => {
  return (
    <>
      <CartContextProvider>
        <AuthContextProvider>
          <ProductContextProvider>
            <Header />
            <MyRoutes />
          </ProductContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
