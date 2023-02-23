import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

const FilterProduct = () => {
  const { fetchByParams } = useProducts();
  const { search } = useLocation();

  return (
    <div>
      <Paper
        sx={{
          // m: 5,
          display: "flex",
          justifyContent: "center",
          width: "110px",
          flexDirection: "column",
          position: "absolute",
          top: "40%",
          zIndex: "1",
          left: "8%",
          backgroundColor: "transparent",
          // justifyContent: "space-around",
          p: 5,
          maxHeight: "50vh",
          boxShadow: "0",
        }}
      >
        <Box>
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label" sx={{ mb: 2 }}>
              Categories
            </FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("category", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="iphone"
                control={<Radio />}
                label="iPhone"
              />
              <FormControlLabel value="mac" control={<Radio />} label="Mac" />

              <FormControlLabel
                value="clothes"
                control={<Radio />}
                label="Clothes"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>
    </div>
  );
};

export default FilterProduct;
