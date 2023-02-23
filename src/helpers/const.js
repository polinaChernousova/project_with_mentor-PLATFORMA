export const API_PRODUCTS = "http://localhost:8001/products";

// actions for products

export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_ONE_PRODUCT: "GET_ONE_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT",
};

// actions for auth

export const ACTIONS_USER = {
  CHECK_USER: "CHECK_USER",
};

// admin
export const ADMIN_USERS = [
  {
    email: "admin@gmail.com",
    password: 123,
  },
];

// actions for cart

export const ACTIONS_CART = {
  GET_CART: "GET_CART",
  GET_CART_LENGTH: "GET_CART_LENGTH",
};
