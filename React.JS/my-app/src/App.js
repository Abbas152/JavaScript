
import './App.css';
import { Fragment } from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
    {/* Usually We Don't Change Props In React Function Component. */}
<Navbar Title= "TextUtils" About= "About" /> 
<TextForm heading= "Enter Your Text To Analyze"/>
    </>
  );
}

export default App;
