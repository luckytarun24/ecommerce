//Components
import { Breadcrumbs, CardMedia, Box, Typography } from "@mui/material";

//Assets
import { breadCrumbsImage } from "../../assets";
import { ROUTES, routesNameByPath } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { styles } from "./utils";

const GetBreadcrumbs = ({ separator }) => {
  const { pathname } = useLocation();

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <Breadcrumbs separator={separator || "/"} aria-label="breadcrumb">
      {pathSegments.map((path, index) => (
        <Link key={index} to={`/home`} style={styles.item}>
          {routesNameByPath[`/${path}`]?routesNameByPath[`/${path}`]:path}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  if (pathname === ROUTES.HOME) {
    return <></>;
  }
  if (pathname === `${ROUTES.HOME}${ROUTES.PRODUCT}`) {
    return (
      <Box m={4}>
        <GetBreadcrumbs separator={">"} />
      </Box>
    );
  }
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div className="bread-crumbs" style={styles.main}>
      <CardMedia sx={styles.image} image={breadCrumbsImage} />
      <Box sx={styles.content}>
        <Typography variant="h3">
          {routesNameByPath[`/${pathSegments[pathSegments.length - 1]}`]}
        </Typography>
        <GetBreadcrumbs />
      </Box>
    </div>
  );
};
export default BreadCrumbs;
