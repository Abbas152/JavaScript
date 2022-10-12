import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  return (
    <>
      {/* Usually We Don't Change Props In React Function Component. */}
      <Navbar Title="TextUtils" About="About" />
      {/* <TextForm heading="Enter Your Text To Analyze" /> */}
      <About />
    </>
  );
}

export default App;
