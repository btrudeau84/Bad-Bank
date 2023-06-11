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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/alldata" element={<AllData />} />
      </Routes>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext.Provider
        value={{
          users: [
            { name: "test name", email: "test@mit.edu", password: "1234" },
          ],
        }}
      >
        <Spa />
      </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
