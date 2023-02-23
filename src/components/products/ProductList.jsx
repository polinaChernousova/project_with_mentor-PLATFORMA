import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import FilterProduct from "./FilterProduct";
import ProductCard from "./ProductCard";

const ProductList = () => {
  //get products
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  // pagination
  const [page, setPage] = useState(1);

  const itemsOnPage = 6;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
    // const url = `${location.pathname}?${search.toString()}`;
    // navigate(url);
  };

  function currentPage() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <>
      <FilterProduct />
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
            m: "5px 0px 10px 230px",
          }}
        >
          {products ? (
            currentPage().map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </Box>
      </div>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          m: 5,
        }}
        count={count}
        page={page}
        onChange={handlePage}
      />
    </>
  );
};

export default ProductList;
