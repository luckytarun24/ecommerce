const styles = {
  box: {
    display: "flex",
    margin: "10px 0",
  },
  buttonBox: {
    display: "flex",
    gap: "30px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    marginBottom: "25px",
    gap: "5px",
  },
  rating: {
    margin: "10px 0",
    display: "flex",
    "& .rating-text": {
      margin: "0 10px",
      padding: "0 10px",
      color: "#9F9F9F",
      borderLeft: "1px solid #9F9F9F",
    },
  },
  price: {
    fontSize: "16px",
    color: "#9F9F9F",
  },
  sizeBtn: {
    backgroundColor: "#F9F1E7",
    color: "black",
    marginRight: "20px",
  },
  pic: {
    borderRadius: "10px",

    height: "40px",

    width: "40px",
  },

  mImg: {
    height: "450px",

    width: "423px",
  },

  contentBox: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
  },

  subContent: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    margin: "15px 0",
  },

  button: {
    borderColor: "black",
    color: "black",
    borderRadius: "15px",
    fontSize: "16px",
    width: "30%",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #B88E2F",
      color: "#B88E2F",
    },
  },

  numberBtn: {
    borderColor: "black",
    color: "black",
    fontSize: "16px",
    width: "20%",
  },
};

export default styles;
