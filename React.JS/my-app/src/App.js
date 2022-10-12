import React, { useState } from 'react'

import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  let [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark");
      document.querySelector("body").style.backgroundColor = "#2125296b";
    }else{
      setMode("light");
      document.querySelector("body").style.backgroundColor = "white";
  }
  }
  return (
    <>
      {/* Usually We Don't Change Props In React Function Component. */}
      <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar Title="TextUtils" About="About" /> */}
      <TextForm heading="Enter Your Text To Analyze" mode={mode}/>
      {/* <About  /> */}
    </>
  );
}

export default App;
