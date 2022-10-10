
import './App.css';
import { Fragment } from 'react';
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <>
    {/* Usually We Don't Change Props In React Function Component. */}
<Navbar Title= "TextUtils" About= "About" /> 
    </>
  );
}

export default App;
