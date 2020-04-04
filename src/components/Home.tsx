import * as React from "react";
import HomeRouter from "../router/HomeRoute";
import NavBar from "./NavBar";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <>
      <NavBar />
      <div>
        <HomeRouter />
      </div>
    </>
  );
};

export default Home;
