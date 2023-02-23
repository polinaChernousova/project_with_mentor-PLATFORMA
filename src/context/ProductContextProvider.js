import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, API_PRODUCTS } from "../helpers/const";

const productContext = createContext();

export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {
    title: "",
    description: "",
    category: "",
    price: "",
    picture: "",
  },
  editProduct: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.EDIT_PRODUCT:
      return { ...state, editProduct: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! hooks
  const location = useLocation();

  const navigate = useNavigate();

  const createProduct = async (newProduct) => {
    try {
      await axios.post(API_PRODUCTS, newProduct);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${window.location.search}`);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProduct = async (id) => {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (newProduct) => {
    try {
      await axios.patch(`${API_PRODUCTS}/${newProduct.id}`, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_PRODUCTS}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // фильтрация

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const values = {
    createProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    editProduct,
    fetchByParams,
    oneProduct: state.oneProduct,
    products: state.products,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
