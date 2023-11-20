import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // setInterval(() => {
  //   document.title = "TextUtils is amazing!";
  // }, 4000);
  // setInterval(() => {
  //   document.title = "Install TextUtils Now!";
  // }, 2000);

  const [modeText, setModeText] = useState("Enable dark mode");

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0C356A";
      document.body.style.color = "white";
      showAlert("success", "Dark mode enabled");
      setModeText("Enable light mode");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - Light Mode";
      setModeText("Enable dark mode");
      showAlert("success", "Light mode enabled");
    }
  };

  const [mode, setMode] = useState("light");

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
        />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - lowercase , uppercase , capitalize , copy , clear"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
