import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getLocalStorage, setLocalStorage } from "../../utils/util";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Rating,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
const Details = () => {
  const [res, setRes] = useState([]);
  const [storage, setStorage] = useState([]);
  const [btn, setBtn] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(`http://localhost:5000/Electronics/${id}`);
      if (res.ok) {
        const response = await res.json();
        setRes(response);
      }
    };

    dataFetch();
  }, []);

  useEffect(() => {
    (async () => {
      if (btn) {
        const oldItems = (await getLocalStorage("so-cart")) || [];
        const updatedItems = [...oldItems, storage];
        setLocalStorage("so-cart", updatedItems);
      }
    })();
  }, [btn]);
  const addToCart = () => {
    setBtn(true);
    setStorage(res);
    // if (scroll) window.scrollTo(0, 0);
    // setTimeout(() => {
    //   setBtn(false);
    // }, 3000);
  };
  const deleteItem = async () => {
    const oldItems = (await getLocalStorage("so-cart")) || [];
    oldItems.map(function (item, index) {
      if (id === item.id) {
        oldItems.splice(index, 1);
      }
      setLocalStorage("so-cart", oldItems);
    });
  };

  return (
    <>
      <Navbar />
      <Container
        style={{
          padding: "50px",
          margin: "auto",
        }}
      >
        <Alert
          severity="success"
          style={{
            display: "block",
          }}
        >
          <AlertTitle>Success</AlertTitle>
          {res.ProductName}— <strong>Added to cart!</strong>
        </Alert>
        <Card variant="outlined">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <img
              src={res.ProductImage}
              alt="my-image"
              width="300"
              height="320px"
              object-fit="cover"
              style={{
                borderRadius: "5px",
              }}
            />
          </Box>
          <CardContent>
            <Typography variant="h5" component="div">
              {res.ProductName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              ${res.ProductAmount}
            </Typography>
            <Typography variant="body2">
              {res.ProductDetails}
              <br />
              {res.ProductSeller}
            </Typography>
            <br />
            <Typography variant="body2">
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Typography>
            <br />
            <Typography variant="h4">Promotions</Typography>
            <ul>
              <li>
                {" "}
                <Typography variant="body2">
                  Free shipping to grocery above $300.
                </Typography>
              </li>
              <li>
                {" "}
                <Typography variant="body2">
                  Save big on electronics and enjoy fast delivery.
                </Typography>
              </li>
              <li>
                {" "}
                <Typography variant="body2">
                  10% cash back on your tv subscription with EM electronics.
                </Typography>
              </li>
            </ul>
            <Typography variant="h4">Door Delivery</Typography>
            <ul>
              <li>Delivery $20</li>
              <li>
                Ready for delivery between the time you place the order and the
                next 5 days.
              </li>
            </ul>
            <Typography variant="h4">Return Policy</Typography>
            <ul>
              <li>
                Free return within 5 days for Lesmo mall items and 7 days for
                other.
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Button type="submit" size="small" onClick={addToCart}>
              Add to Cart
            </Button>
            <Button
              type="submit"
              size="small"
              onClick={deleteItem}
              style={{
                color: "red",
              }}
            >
              Delete Item
            </Button>
          </CardActions>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Details;
