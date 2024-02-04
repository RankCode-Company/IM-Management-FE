import { useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import CustomAppBar from "./CustomAppBar";

//Component Type
interface LoadingComponentProps {
  childrenComponent?: ReactNode;
}

const LoadingComponent = ({ childrenComponent }: LoadingComponentProps) => {
  //States
  const [pageTitle, setPageTitle] = useState<string>("");

  const location = useLocation();
  const hideAppBarOnPaths = ["/login"]; // Paths where the AppBar should not be shown
  const showAppBar = !hideAppBarOnPaths.includes(location.pathname);
  console.log(showAppBar);

  useEffect(() => {
    //DEBUG
    console.log("DEBUG: Location: ", location);
    //Change the title thats being used in the app bar
    switch (location.pathname) {
      case "/home":
        setPageTitle("Home");
        break;
      case "/about":
        setPageTitle("About Us");
        break;
      case "/login":
        setPageTitle("Log In");
        break;
      case "/register":
        setPageTitle("Register");
        break;
      default:
        setPageTitle("IM Management");
    }
  }, [location]);
  return (
    <>
      {showAppBar && <CustomAppBar pageTitle={pageTitle} />}
      {childrenComponent}
    </>
  );
};

export default LoadingComponent;
