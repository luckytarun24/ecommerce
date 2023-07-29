import { Box } from "@mui/material";

import { BillingCard, BillingFrom } from "./components";

const Cart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "60px 10%",
      }}
      className="billing"
    >
      <BillingFrom />
      <BillingCard />
    </Box>
  );
};
export default Cart;
