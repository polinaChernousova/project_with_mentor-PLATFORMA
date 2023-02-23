import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../context/ProductContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN_USERS } from "../../helpers/const";
import { useCart } from "../../context/CartContextProvider";
import { Box } from "@mui/material";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { user } = useAuth();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          maxWidth: 320,
          maxHeight: "550px",
          m: "30px",
          p: 1,
        }}
      >
        <CardMedia
          sx={{
            maxHeight: "200px",

            objectFit: "contain",
          }}
          image={item.picture}
          title="product img"
          component="img"
        />
        <CardContent
          sx={{
            maxHeight: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            width: "100%",
            // m: 5,
            // display: "flex",
            // justifyContent: "start",
          }}
        >
          {ADMIN_USERS.map((elem) =>
            user && elem.email === user.email ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "150px",
                  // position: "absolute",
                  mb: 0,
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => navigate(`/edit/${item.id}`)}
                >
                  Edit
                </Button>
              </Box>
            ) : (
              ""
            )
          )}
          <Button
            variant="contained"
            size="small"
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              // justifyContent: "flex-end",
              // alignItems: "flex-end",
            }}
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
