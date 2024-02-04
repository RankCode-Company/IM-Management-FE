import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./components.css";
/**
 * Properties that will be used in the Drawer component.
 */
interface DrawerComponentProps {
  /**
   * The pages that will get rendered on the drawer.
   */
  names: string[];
  /**
   * Function to handle what will happen when the drawer button is clicked.
   */
  handleDrawerToggle: () => void; // Only accept a void function
}

const DrawerComponent = ({
  names,
  handleDrawerToggle,
}: DrawerComponentProps) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <CloseIcon />
      <List>
        {names.map((name) => (
          <ListItemButton >
            <ListItemText className="menu-listitem-button" primary={name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default DrawerComponent;
