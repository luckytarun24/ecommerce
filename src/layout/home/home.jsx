import { CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";

//Components
import CarouselComponent from "../../component/carousel/carousel";
import CardComponent from "../../component/card";

//Constants
import { SHOP_RANGE, SHOP_RANGE_SUBTITLE } from "./utils/constants";

//Styles
import { styles } from "./utils";

//Assets
import { men, girl, kid } from "../../assets";
import { ROUTES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //States
  const products = useSelector((state) => state.products);

  //Helpers
  const image = [
    { title: "Men", image: men, path: ROUTES.MENS },
    { title: "Girl", image: girl, path: ROUTES.WOMEN },
    { title: "Kid", image: kid, path: ROUTES.KIDS },
  ];
  const navigation = useNavigate();
  return (
    <div id="home">
      <CarouselComponent />
      <div id="shop-options" style={styles.shopOptions}>
        <Typography align="center" variant="h4">
          {SHOP_RANGE}
        </Typography>
        <Typography align="center" variant="subtitle1">
          {SHOP_RANGE_SUBTITLE}
        </Typography>
        <div style={styles.imageOption}>
          {image.map((item, index) => (
            <div key={index}>
              <CardMedia
                sx={styles.imageOptionElement}
                image={item.image}
                onClick={() => {
                  navigation(`.${ROUTES.SHOP}${item.path}`);
                }}
              />
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                sx={{ padding: "10px", fontWeight: 700 }}
              >
                {" "}
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div id="product">
        <Typography variant="h2" textAlign={"center"} sx={{ padding: 2 }}>
          Products
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "40px",
            flexWrap: "wrap",
          }}
        >
          {products.slice(0, 8).map((item) => (
            <CardComponent
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
