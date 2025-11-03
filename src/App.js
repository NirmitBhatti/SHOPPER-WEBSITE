import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Rou from "./Router";

function App() {
  return (
    <>
      <Rou />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
