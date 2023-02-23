import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

// const INIT_STATE = {
//   title: "",
//   description: "",
//   category: "",
//   price: "",
//   picture: "",
// };

const Inputs = ({ isEdit }) => {
  const { createProduct, getOneProduct, oneProduct, editProduct } =
    useProducts();
  const navigate = useNavigate();

  // state add
  //  state edit
  const [product, setProduct] = useState(oneProduct);
  const [editedProduct, setEditedProduct] = useState(editProduct);

  const { id } = useParams();

  //! edit
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (isEdit && oneProduct) {
      setEditedProduct(oneProduct);
    }
  }, [oneProduct]);

  // ! end add finction

  const handleInp = (e) => {
    if (isEdit) {
      if (e.target.name === "price") {
        let obj = {
          ...editedProduct,
          [e.target.name]: Number(e.target.value),
        };
        setEditedProduct(obj);
      } else {
        let obj = {
          ...editedProduct,
          [e.target.name]: e.target.value,
        };
        setEditedProduct(obj);
      }
    } else {
      if (e.target.name === "price") {
        let obj = {
          ...product,
          [e.target.name]: Number(e.target.value),
        };
        setProduct(obj);
      } else {
        let obj = {
          ...product,
          [e.target.name]: e.target.value,
        };
        setProduct(obj);
      }
    }
  };

  function saveProduct() {
    createProduct(product);

    setProduct({
      title: "",
      description: "",
      category: "",
      price: "",
      picture: "",
    });
    navigate("/");
  }

  function handleSaveEditProduct() {
    for (let key in editedProduct) {
      if (!editedProduct[key]) {
        alert("empty inputs");
        return;
      }
    }
    editProduct(editedProduct);
    navigate("/");
  }

  return (
    <FormControl
      sx={{ gap: "20px", width: "100%", margin: "50px auto" }}
      color="success"
    >
      <TextField
        // label="enter title"
        placeholder="enter title"
        variant="outlined"
        name="title"
        fullWidth
        value={editedProduct.title}
        onChange={handleInp}
      />

      <TextField
        label="enter description"
        variant="outlined"
        name="description"
        value={editedProduct.description}
        onChange={handleInp}
      />
      <TextField
        label="enter categoty"
        variant="outlined"
        name="category"
        value={editedProduct.category}
        onChange={handleInp}
      />
      <TextField
        label="enter price"
        variant="outlined"
        name="price"
        value={editedProduct.price}
        onChange={handleInp}
      />
      <TextField
        label="enter url"
        variant="outlined"
        name="picture"
        value={editedProduct.picture}
        onChange={handleInp}
      />

      {isEdit === false ? (
        <Button
          sx={{
            bgcolor: "#8C2CEF",
            color: "#fff",
            "&:hover": { bgcolor: "#8125DC" },
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => saveProduct(product)}
        >
          Add
        </Button>
      ) : (
        <Button
          onClick={() => handleSaveEditProduct(editedProduct)}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          save changes
        </Button>
      )}
    </FormControl>
  );
};

export default Inputs;
