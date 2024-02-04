import { createTheme } from "@mui/material/styles";

/**
 * Basic pallete for the project
 */
const theme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
    },
    primary: {
      main: "#0052CC",
    },
    secondary: {
      main: "#FFAB00",
    },
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FFC107",
    },
    success: {
      main: "#4CAF50",
    },
    text: {
      primary: "#333333",
      secondary: "#757575",
    },
  },
});

export default theme;
