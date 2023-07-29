import {
  Box,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import { men } from "../../../assets";
import { cartTableStyle } from "../utils/styles";
import { useDispatch, useSelector } from "react-redux";
import { addCountCart, removeFromCart } from "../../../reducers/cart/cartSlice";
import { setSnackBar } from "../../../reducers/snackBar/snackBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartTable = () => {
  const columns = [
    { id: "Product", label: "Product", minWidth: 170 },
    { id: "Price", align: "right", label: "Price", minWidth: 100 },
    {
      id: "Quantity",
      label: "Quantity",
      minWidth: 170,
      align: "right",
    },
    {
      id: "Sub Total",
      label: "Sub Total",
      minWidth: 170,
      align: "right",
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 170,
      align: "center",
    },
  ];

  //States
  const cartList = useSelector((state) => state.carts.cart);

  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  //Helpers
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
    dispatch(
      setSnackBar({ message: "Deleted successfully", severity: "error" })
    );
  };

  const handleSave = (id) => {
    dispatch(
      addCountCart({
        id: id,
        count: Number(count),
      })
    );
    dispatch(setSnackBar({ message: "Product added successfully" }));
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer sx={cartTableStyle.container}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={cartTableStyle.header}
                key={column.id}
                align={column.align}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? cartList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : cartList
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell sx={cartTableStyle.imageCell} scope="row">
                <CardMedia image={men} alt={"no"} sx={cartTableStyle.image} />
                {row.name}
              </TableCell>
              <TableCell sx={cartTableStyle.cell} align="right">
                {row.price}
              </TableCell>
              <TableCell sx={cartTableStyle.cell} align="right">
                <TextField
                  sx={cartTableStyle.input}
                  value={count !== 0 ? count : row.count}
                  onChange={(event) => setCount(event.target.value)}
                />
              </TableCell>
              <TableCell sx={cartTableStyle.totalCell} align="right">
                {row.price * row.count}
              </TableCell>
              <TableCell sx={cartTableStyle.totalCell} align="right">
                <Box sx={cartTableStyle.actionCell}>
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSave(row.id)}
                    icon={faFloppyDisk}
                  />

                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemove(row.id)}
                    icon={faTrash}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[4, 8, 16, { label: "All", value: -1 }]}
              colSpan={3}
              count={cartList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              sx={cartTableStyle.cell}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
export default CartTable;
