import React, { useState } from "react";

export default function TextForm(props) {
  const handlerUpperCaseClick = () => {
    // console.log("UpperCase Clicked"  + text);

    // Here Below we Convert String to UpperCase.
    // We Get text value through textarea 'value' attribute,
    // and then convert string to UpperCase
    const convertText = text.toUpperCase();
    setText(convertText); // Here We SetText.
  };
  const handlerlowercaseClick = () => {
    const convertText = text.toLowerCase();
    setText(convertText); // Here We SetText.
  };


  const handlerCopy = () => {
    const Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  };

  const handlerRemoveSpaces = () => {
    const Text = text.split(/[ ]+/);
    setText(Text.join(" "));
  };


  const handlerClearClick = () => {
    const convertText = "";
    setText(convertText); // Here We SetText.
  };
  const handleOnChange = (event) => {
    console.log("OnChange Clicked");
    // Here We Set The OnChange Value through Target Which is Provided by Event,
    // And Event is Provided by onChange.
    setText(event.target.value);
  };

  // Declare a New State Variable, Which We Will Call "Text"
  // 1st Variable is By Default Set Which is Write in useState.
  // 2nd Variable is Updated and Set Value Which we Get in handlerUpperCaseClick Function
  const [text, setText] = useState("Enter Text Here");
  return (
    <div className="container my-4" style={
      {
        color: props.mode === "dark" ? "white" : "black",
      }
    }>
      <h1 className="">{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          This is Textarea Below
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
          style={
            {
              backgroundColor: props.mode === "dark" ? "transparent" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }
          }
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handlerUpperCaseClick}>
        Convert To UPPERCASE
      </button>
      <button className="btn btn-primary mx-4" onClick={handlerlowercaseClick}>
        Convert To lowercase
      </button>
      <button className="btn btn-primary" onClick={handlerCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-4" onClick={handlerRemoveSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary " onClick={handlerClearClick}>
        Clear
      </button>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} Words and {text.length} Characters Including
          Spaces.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Your Text To The Above Box To Preview Here"}</p>
      </div>
    </div >
  );
}
