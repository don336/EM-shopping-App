import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Card, CardActions, CardContent,Button, Typography} from "@mui/material";
import { Item } from "./Home.style";
import Navbar from "../../Layout/Navbar";
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
    <Box sx={{ flexGrow: 1,
    }}>
      <Navbar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{
          padding: 10,
        }}
      >
        {data.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.ProductId}>
              <Card sx={{ minWidth: 300 }}>
                <img src={item.ProductImage} alt="my-image" width="100%" height="200px"/>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.ProductName}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
