import React, { useState } from 'react'

import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (AlertMessage, AlertType) => {
    setAlert({
      message: AlertMessage,
      type: AlertType,
    })
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2125296b";
      showAlert("DarkMode is Enabled Now", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is Enabled Now", "success");
    }
  }
  return (
    <>
      {/* Usually We Don't Change Props In React Function Component. */}
      <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar Title="TextUtils" About="About" /> */}
      {/* <Alert alert={alert} /> In This Object We Pass Alert State */}
      <Alert Alert={alert} />

      <TextForm heading="Enter Your Text To Analyze" mode={mode} />
      {/* <About  /> */}
    </>
  );
}

export default App;
