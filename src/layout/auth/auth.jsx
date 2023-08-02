import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

//Components
import { Box, CardMedia, Paper } from "@mui/material";

//Assets
import { loginImage, siginInImage } from "../../assets";

//Styles
import { styles } from "./utils";

const Auth = () => {
  //States
  const { pathname } = useLocation();

  return (
    <Box id="auth" sx={styles.auth}>
      <Paper sx={styles.paper} elevation={8}>
        <Box sx={styles.left} id="left">
          <CardMedia
            sx={styles.loginImage}
            image={pathname === "/signup" ? siginInImage : loginImage}
          />
        </Box>
        <Box sx={styles.right} id="right">
          <Outlet />
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
