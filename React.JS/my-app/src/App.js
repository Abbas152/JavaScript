import React, { useState } from 'react'

import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [greenMode, setGreenMode] = useState("light");
  const [greyMode, setGreyMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (AlertMessage, AlertType) => {
    setAlert({
      message: AlertMessage,
      type: AlertType,
    })
    setTimeout(() => {
      setAlert(alert);
    }, 2000);
  }

  const DarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#2125296b";
      showAlert("DarkMode is Enabled Now", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is Enabled Now", "success");
    }
  }

  
  const GreenMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#2125296b";
      showAlert("DarkMode is Enabled Now", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is Enabled Now", "success");
    }
  }


  const GreyMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#2125296b";
      showAlert("DarkMode is Enabled Now", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is Enabled Now", "success");
    }
  }
  return (
    <>
      {/* Usually We Don't Change Props In React Function Component. */}
      <Navbar Title="TextUtils" darkMode={darkMode} greenMode={greenMode} greyMode={greyMode} DarkMode={DarkMode} />
      {/* <Navbar Title="TextUtils" About="About" /> */}
      {/* <Alert alert={alert} /> In This Object We Pass Alert State */}
      <Alert Alert={alert} />

      <TextForm heading="Enter Your Text To Analyze" darkMode={darkMode} showAlert={showAlert} />
      {/* <About  /> */}
    </>
  );
}

export default App;
