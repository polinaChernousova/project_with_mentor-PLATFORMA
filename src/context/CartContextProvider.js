import { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS_CART } from "../helpers/const";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

const CartContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS_CART.GET_CART:
        return { ...state, cart: action.payload };
      case ACTIONS_CART.GET_CART_LENGTH:
        return { ...state, cartLength: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // достаем данные из корзины

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );

      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: ACTIONS_CART.GET_CART,
      payload: cart,
    });
  }

  // add to cart

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    cart.products.push(newProduct);

    // let productToFind = cart.products.filter(
    //   (elem) => elem.item.id === product.id
    // );

    // if (productToFind.length === 0) {
    //   cart.products.push(newProduct);
    // } else {
    //   cart.products = cart.products.filter(
    //     (elem) => elem.item.id !== product.id
    //   );
    // }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ACTIONS_CART.GET_CART,
      payload: cart,
    });
  };

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.products.filter((elem) => {
        return elem.item.id === id;
      });
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
  }

  // проверка на то сколько товаров в корзине

  const changeProductCount = (count, id) => {
    if (count < 1) {
      alert("Count of product can not negative!");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ACTIONS_CART.GET_CART,
      payload: cart,
    });
  };

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();

    dispatch({
      type: ACTIONS_CART.GET_CART_LENGTH,
      payload: cart,
    });
  }
  const values = {
    getCart,
    addProductToCart,
    changeProductCount,
    deleteProductInCart,
    checkProductInCart,
    cart: state.cart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
