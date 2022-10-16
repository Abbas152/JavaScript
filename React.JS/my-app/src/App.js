import React, { useState } from "react";

import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";

// import { 
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom"; // This is Package Which is Install with Command npm install react-router-dom 

function App() {
  const [darkMode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const body = document.querySelector("body");
  // const [mybody, setMyBody] = useState(body.style.backgroundColor = "white");
  // if (body.style.backgroundColor==="light") {
  // }
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
const ColorPallete = (cls)=>{
  bodyClassRemove();
  document.body.classList.add("bg-" + cls);

}
  const toggleDarkMode = (cls) => {
    if (darkMode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2125296b";
      showAlert("DarkMode is Enabled Now", "success");
      body.style.backgroundColor = "dark";


    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is Enabled Now", "success");
      body.style.backgroundColor = "light";

    }
  };

  return (
    <>
  
      {/* <Router> */}
        {/* Usually We Don't Change Props In React Function Component. */}
        <Navbar
          Title="TextUtils"
          About="About"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          ColorPallete={ColorPallete}
        />
        {/* <Navbar Title="TextUtils" About="About" /> */}
        {/* <Alert alert={alert} /> In This Object We Pass Alert State */}
        <Alert Alert={alert} />

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        {/* <Switch is Deprecated Now We Use Routes> */}
        {/* <Routes> */}

          {/* <Route path='/about' element={ */}

          {/* <About /> */}

           {/* }/>  */}

          {/* <Route path="/" element={ */}

          <TextForm heading="Enter Your Text To Analyze" darkMode={darkMode} showAlert={showAlert} />

          {/* } /> */}
        {/* </Routes> */}
        {/* </Router> */}
    </>
  );
}

export default App;
