import { useSelector } from "react-redux";

//Component
import { Backdrop, Button, Divider, Paper, Typography } from "@mui/material";
import CartElement from "./cartDropDownELement";

//Styles
import { styles } from "./utils";

const Cart = ({ handleClose }) => {
  //States
  const cartList = useSelector((state) => state.carts.cart);
  const total = useSelector((state) => state.carts.total);

  return (
    <Backdrop open={true} onClick={handleClose}>
      <Paper
        elevation={2}
        sx={styles.cart}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="header" style={styles.header}>
          <Typography variant="h6">Shopping Cart</Typography>
        </div>
        <Divider />
        <div className="main" style={styles.main}>
          {cartList.map(({ name, price, count, image, id }, index) => (
            <CartElement
              key={index}
              name={name}
              image={image}
              price={price}
              count={count}
              id={id}
            />
          ))}
        </div>

        <div className="footer" style={styles.footer}>
          <div className="sub-total" style={styles.total}>
            <Typography>Sub Total</Typography>
            <Typography>{total}</Typography>
          </div>
          <Divider />
          <div className="action" style={styles.action}>
            {["Cart", "Checkout", "comparison"].map((name) => (
              <Button
                size="small"
                sx={styles.actionButton}
                key={name}
                variant="outlined"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </Paper>
    </Backdrop>
  );
};
export default Cart;
