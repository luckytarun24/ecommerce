//Components
import { Box } from "@mui/material";
import { BillingCard, BillingFrom } from "./components";

//Styles
import { styles } from "./utils";

const Cart = () => {
  return (
    <Box sx={styles.box} className="billing">
      <BillingFrom />
      <BillingCard />
    </Box>
  );
};
export default Cart;
