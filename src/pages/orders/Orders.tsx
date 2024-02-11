// import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/material";
import LargeButton from "../../components/LargeButton";
//TODO: Make this more user friendly. This can be done by making the orders path directly
//      list all the orders, then have edit/delete for each entry, and have an add button.
//TODO: Add some sort of skeleton component/screen for the orders list.
const Orders = () => {
  return (
    <Box>
      <LargeButton path="add" label="orders.add" extraClass="non-hidden" />
    </Box>
  );
};

export default Orders;
