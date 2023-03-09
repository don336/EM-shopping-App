import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography
          variant="h4"
          component="div"
          style={{
            textAlign: "center",
            fontStyle: "italic",
            padding: "20px",
          }}
        >
          LESMO Shopping Cart
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 12 }}
          style={{
            padding: "30px",
          }}
        >
          <Grid item xs={8}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #aaaa",
                  }}
                >
                  <Typography variant="h5" component="div">
                    Product Dealer
                  </Typography>
                  <Button
                    type="submit"
                    size="small"
                    style={{
                      color: "red",
                    }}
                  >
                    Delete Item
                  </Button>
                </Box>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <Box>Img</Box>
                  <Box> Product Description</Box>
                </Stack>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "10px",
                  }}
                >
                  <Typography variant="body1">Price: $400/piece</Typography>
                  <Stack direction={{ xs: "column", sm: "row" }}>
                    <Button>-</Button>
                    <Typography variant="h6">0</Typography>
                    <Button>+</Button>
                  </Stack>
                </Box>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} gridRow="1">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box
                  style={{
                    borderBottom: "1px solid #aaa",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    style={{
                      padding: "10px",
                    }}
                  >
                    Cart SubTotal
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 12 }}
                  >
                    <Typography variant="body1">Item(s) Total</Typography>
                    <Box>
                      <Typography>$400</Typography>
                      <Typography>$400</Typography>
                      <Typography>$400</Typography>
                      <Typography>$400</Typography>
                      <Typography>$400</Typography>
                      <Typography>$400</Typography>
                    </Box>
                  </Stack>
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 12 }}
                >
                  <Typography variant="body1">Cart Total</Typography>
                  <Typography>USD 400</Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Link
                  to={`/checkout`}
                  style={{
                    textDecoration: "none",
                    color: "#189AB4",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#333",
                    }}
                  >
                    Check Out
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
