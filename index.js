import React from "react";
import { Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import { UserContext } from "./context";
function Spa() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ users: [] }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createaccount" element={<CreateAccount />}></Route>
          <Route path="/deposit/" element={<Deposit />}></Route>
          <Route path="/withdraw/" element={<Withdraw />}></Route>
          <Route path="/alldata/" element={<AllData />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);
