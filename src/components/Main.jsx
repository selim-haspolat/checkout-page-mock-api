
import { useState } from "react";
import Admin from "./Admin";
import Home from "./Home";
import Navbar from "./Navbar";

const Main = () => {
  const [page, setPage] = useState("Home");

  return (
    <div className="">
      <Navbar setPage={setPage} />
      {page === "Home" ? <Home /> : <Admin />}
    </div>
  );
};

export default Main;
