import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("component MOunted");
    return console.log("Component Dismounted");
  }, []);
  return (
    <div>
      <span>Hello Home component</span>
    </div>
  );
};

export default Home;
