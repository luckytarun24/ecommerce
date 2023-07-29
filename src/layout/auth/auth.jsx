import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

//Components
import { CardMedia, Paper } from "@mui/material";

//Assets
import { loginImage, siginInImage } from "../../assets";

//Styles
import { styles } from "./utils";

const Auth = () => {
  //States
  const { pathname } = useLocation();

  return (
    <div id="auth">
      <Paper sx={styles.paper} elevation={8}>
        <div style={styles.left} id="left">
          <CardMedia
            sx={styles.loginImage}
            image={pathname === "/signup" ? siginInImage : loginImage}
          />
        </div>
        <div style={styles.right} id="right">
          <Outlet />
        </div>
      </Paper>
    </div>
  );
};

export default Auth;
