import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("http://localhost:5000/Electronics");
      if (res.ok) {
        const response = await res.json();
        setData(response);
      }
    };
    dataFetch();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        style={{
          padding: 10,
        }}
      >
        {data.map((item, index) => (
          <Grid item xs={1} sm={4} md={4} key={index}>
            <Card sx={{ minWidth: 275 }}>
              <img
                src={item.ProductImage}
                alt="my-image"
                width="100%"
                height="300px"
                object-fit= 'cover'
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.ProductName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  ${item.ProductAmount}
                </Typography>
                <Typography variant="body2">
                  {item.ProductDetails}
                  <br />
                  {item.ProductSeller}
                </Typography>
                <Typography variant="body2">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/details/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#189AB4",
                  }}
                >
                  Learn More
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};

export default Home;
