import { CardMedia, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { removeFromCart } from "../../reducers/cart/cartSlice";
import { setSnackBar } from "../../reducers/snackBar/snackBar";

const CartElement = ({ name, price, count, image, id }) => {
  const dispatch = useDispatch();

  //Helper
  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
    dispatch(
      setSnackBar({ message: "Deleted successfully", severity: "error" })
    );
  };
  return (
    <div
      className="card-element"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <CardMedia
        image={image}
        alt={"no"}
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "10px",
          // objectFit: "fill",
          textAlign: "center",
        }}
      />
      <div className="details" style={{ width: "50%" }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="caption">
          {`${count} x `}
          <b style={{ color: "#B88E2F" }}>{price}</b>
        </Typography>
      </div>
      <div className="action">
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={handleRemove}
          icon={faCircleXmark}
        />
      </div>
    </div>
  );
};
export default CartElement;
