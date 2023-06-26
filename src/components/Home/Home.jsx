import React from "react";

import "./Home.scss";
import Header from "../Header/Header";
import FormAddNewUser from "../Form/FormAddNewUser";
import TableUser from "../Form/TableUser";
function Home() {
  return (
    <>
      <Header />
      <FormAddNewUser />
      <TableUser />
    </>
  );
}

export default Home;
