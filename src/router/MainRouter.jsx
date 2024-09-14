import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route index element={<Login />} />
        <Route path="Register" element={<Register />} />

      </Routes>
    </>
  );
}

export default MainRouter;
