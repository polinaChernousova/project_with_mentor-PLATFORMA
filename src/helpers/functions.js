import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

// check admin
export const ProtectedRoutes = () => {
  const { user } = useAuth();

  function isAllowed() {
    if (user.email === "admin@gmail.com") return true;
    return false;
  }
  return isAllowed() ? <Outlet /> : <Navigate to="/login" />;
};

// cart
export const calcTotalPrice = (products) => {
  return products.reduce((prevPrice, current) => {
    return (prevPrice += current.subPrice);
  }, 0);
};

export const calcSubPrice = (product) => +product.count * product.item.price;

export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}
