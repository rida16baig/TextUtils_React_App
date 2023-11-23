import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Converted to UpperCase");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Converted to LowerCase");
  };

  const handleInvClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      let n = text.charAt(i);
      if (n === n.toLowerCase()) {
        n = n.toUpperCase();
      } else {
        n = n.toLowerCase();
      }
      newText += n;
    }
    setText(newText);
    props.showAlert("success", "Converted to InverseCase");
  };

  const handleSenClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("success", "Converted to SentenceCase");
  };

  const handleAltClick = () => {
    let newText = text;
    for (let i = 0; i < newText.length; i++) {
      if (i % 2 === 0) {
        var char = newText[i].toLowerCase();
      } else {
         char = newText[i].toUpperCase();
      }
      newText = newText.substring(0, i) + char + newText.substring(i + 1);
    }
    setText(newText);
    props.showAlert("success", "Converted to AlternateCase");
  };

  const handleCopy = () => {
    let newText = document.getElementById("textBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleCapClick = () => {
    if (text) {
      let words = text.split(" ");
      let capitalizedWords = words.map((word) => {
        if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return ""; // Handle empty words
        }
      });
      let newText = capitalizedWords.join(" ");
      setText(newText);
    }
    props.showAlert("success", "Converted to Capitalized Text");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("success", "Cleared all text");
  };
  return (
    <>
      <div className="container mt-5">
        <h1 className="mx-2 my-4">{props.heading}</h1>
        <div className="form-group">
          <textarea
            name="textBox"
            id="textBox"
            cols="30"
            rows="10"
            value={text}
            onChange={handleOnChange}
            className="form-control mb-2"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0C356A",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleCapClick}>
          Convert to Capitalize Case
        </button>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleSenClick}>
          Convert to Sentence Case
        </button>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleAltClick}>
          Convert to Alternating Case
        </button>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleInvClick}>
          Convert to Inverse Case
        </button>
        <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>

        <span>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }      
              
          </b><b> words</b>
          ,
          and <b>{0.01 *   text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length} minutes</b> read time
        </span>
        <h2 className="my-2">Preview Text</h2>
        <p>{text.length===0?"Nothing to preview!":text}</p>
      </div>
    </>
  );
}