import React from "react";
import { Button } from "@material-ui/core";
import Counter from "../Components/Counter";

const Home = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/about")}>ABOUT</Button>
      <Button onClick={() => history.push("/jobs")}>JOBS</Button>

      <Counter />
    </>
  );
};

export default Home;
