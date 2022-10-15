import React, { useState } from "react";

import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; // This is Package Which is Install with Command npm install react-router-dom 
function App() {
  const [darkMode, setMode] = useState("light");

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

  const bodyClassRemove = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
  }
  const toggleDarkMode = (cls) => {
    bodyClassRemove();
    document.body.classList.add("bg-" + cls);
    if (darkMode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2125296b";
      showAlert("DarkMode is Enabled Now", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is Enabled Now", "success");
    }
  };

  return (
    <>
      <Router>
        {/* Usually We Don't Change Props In React Function Component. */}
        <Navbar
          Title="TextUtils"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        {/* <Navbar Title="TextUtils" About="About" /> */}
        {/* <Alert alert={alert} /> In This Object We Pass Alert State */}
        <Alert Alert={alert} />
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Routes>
          <Route path='about' element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter Your Text To Analyze" darkMode={darkMode} showAlert={showAlert} />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
