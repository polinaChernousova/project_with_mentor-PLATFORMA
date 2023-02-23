import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartTable from "../components/cart/CartTable";
import { useCart } from "../context/CartContextProvider";

const CartPage = () => {
  const { cart, getCart } = useCart();
  const navigate = useNavigate();

  function cartCleaner() {
    localStorage.removeItem("cart");
  }

  useEffect(() => {
    if (!cart) {
      cartCleaner();
    }
  }, [cart]);

  return (
    <>
      {cart ? (
        <CartTable cart={cart} />
      ) : (
        <>
          <Container>
            <div className="bag-content">
              <div className="header">
                <h1 className="bag-header"> Your bag is empty. </h1>
                <div className="bag-header-message">
                  <span>Sign in to see if you have any saved items.</span>
                  <span style={{ marginLeft: "8px" }}>
                    Or continue shopping.
                  </span>
                </div>
              </div>
              <div className="bag-buttons">
                <button onClick={() => navigate("/login")}>Sign In</button>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default CartPage;
