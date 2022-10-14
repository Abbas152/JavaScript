import React, { useState } from "react";

import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
function App() {
  const [darkMode, setMode] = useState("light");
  const [greenMode, setGreenMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (AlertMessage, AlertType) => {
    setAlert({
      message: AlertMessage,
      type: AlertType,
    });
    setTimeout(() => {
      setAlert(alert);
    }, 2000);
  };
  const toggleDarkMode = () => {
    if (darkMode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2125296b";
      showAlert("DarkMode is Enabled Now", "success");
    } else {
      if (greenMode === "green") {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("LightMode is Enabled Now", "success");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("LightMode is Enabled Now", "success");
      }
    }
  };
  const toggleGreenMode = () => {
    if (greenMode === "light") {
      setGreenMode("green");
      document.body.style.backgroundColor = "#006c0d";
      showAlert("GreenMode is Enabled Now", "success");
    } else {
      if (darkMode === "dark") {
        setGreenMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("LightMode is Enabled Now", "success");
      }
      else{
        setGreenMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("LightMode is Enabled Now", "success");
      }
    }
  };
  return (
    <>
      {/* Usually We Don't Change Props In React Function Component. */}
      <Navbar
        Title="TextUtils"
        darkMode={darkMode}
        greenMode={greenMode}
        toggleDarkMode={toggleDarkMode}
        toggleGreenMode={toggleGreenMode}
      />
      {/* <Navbar Title="TextUtils" About="About" /> */}
      {/* <Alert alert={alert} /> In This Object We Pass Alert State */}
      <Alert Alert={alert} />

      <TextForm
        heading="Enter Your Text To Analyze"
        darkMode={darkMode}
        showAlert={showAlert}
      />
      {/* <About  /> */}
    </>
  );
}

export default App;
