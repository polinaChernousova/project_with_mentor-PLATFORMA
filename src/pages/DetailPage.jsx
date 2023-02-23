import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Container } from "@mui/system";
import { useCart } from "../context/CartContextProvider";

const DetailPage = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div>
      {oneProduct ? (
        <Container sx={{ mt: 8 }}>
          <Card
            sx={{
              maxWidth: "100%",
              mb: 10,
            }}
          >
            <CardActionArea
              sx={{
                height: 600,
                display: "flex",
                p: 2,
              }}
            >
              <CardMedia
                sx={{ width: 500, objectFit: "contain" }}
                component="img"
                height="340"
                image={oneProduct.picture}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h3" gutterBottom component="div">
                  {oneProduct.title}
                </Typography>
                <br />
                <Typography variant="h4" component="div" color="text.secondary">
                  {oneProduct.description}
                </Typography>
                <br />

                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    color="text.secondary"
                  >
                    {oneProduct.price}$
                  </Typography>
                </CardContent>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {checkProductInCart(oneProduct.id) ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",

                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    sx={{ m: 2 }}
                    size="small"
                    variant="contained"
                    disabled
                  >
                    Add to Bag
                  </Button>

                  <Button
                    sx={{ m: 2 }}
                    onClick={() => navigate("/cart")}
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    Review Bag
                  </Button>
                </div>
              ) : (
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => addProductToCart(oneProduct)}
                >
                  Add to Bag
                </Button>
              )}
            </CardActions>
          </Card>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DetailPage;
