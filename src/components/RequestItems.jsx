import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Appbar from "./Appbar";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { blue } from "@mui/material/colors";

export default function RequestItems() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [roomNumber, setRoomNumber] = useState(0);
  const [itemCategory, setItemCategory] = useState("");
  const [requestList, setRequestList] = useState([]);
  const [renderList, setRenderList] = useState(false);
  const handleAddButton = () => {
    setRenderList(true);
    setRequestList([
      ...requestList,
      {
        itemName: itemName,
        itemQuantity: itemQuantity,
        itemCategory: itemCategory,
      },
    ]);
    console.log(requestList);
  };
  const deleteFromList = (rowIndex) => {
    const newList = [...requestList];
    const updatedList = newList.filter((item, index) => index !== rowIndex);
    setRequestList(updatedList);
    if (updatedList.length == 0) {
      setRenderList(false);
    }
    //console.log(setRequestList, rowIndex);
  };

  return (
    <>
      <Appbar />
      <form autoComplete="off">
        <Box
          sx={{
            position: "absolute",
            left: {
              xs: "20vw",
              md: "35vw",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: {
              xs: "60vw",
              md: "30vw",
            },
            gap: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AddIcon />
          </Avatar>
          <Typography variant="h4" sx={{ color: blue[500] }}>
            Request
          </Typography>
          <TextField
            id="roomNumber"
            label="Room NO."
            variant="outlined"
            type="number"
            onChange={(e) => setRoomNumber(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="itemName"
            label="Item"
            variant="outlined"
            type="text"
            onChange={(e) => setItemName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="itemQuantity"
            label="Quantity"
            variant="outlined"
            type="number"
            onChange={(e) => setItemQuantity(e.target.value)}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              label="Category"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <MenuItem value={"Books"}>Books</MenuItem>
              <MenuItem value={"Consumable"}>Consumable</MenuItem>
              <MenuItem value={"Software"}>Software</MenuItem>
              <MenuItem value={"Hardware"}>Hardware</MenuItem>
              <MenuItem value={"Furniture"}>Furniture</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>
          <Button
            startIcon={<AddIcon />}
            mt={2}
            variant="contained"
            fullWidth
            onClick={handleAddButton}
          >
            Add
          </Button>
          {renderList && (
            <TableContainer component={Paper} sx={{ width: "30vw" }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requestList.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{row.itemName}</TableCell>
                      <TableCell align="right">{row.itemQuantity}</TableCell>
                      <TableCell align="right">{row.itemCategory}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="delete">
                          <DeleteIcon
                            color="error"
                            onClick={() => deleteFromList(index)}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <Button
            startIcon={<SendIcon />}
            variant="contained"
            type="submit"
            fullWidth
          >
            Send Request
          </Button>
        </Box>
      </form>
    </>
  );
}
