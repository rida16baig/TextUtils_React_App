import React from "react";

export default function About(props) {
  return (
    <div
      className=" mt-5 p-2 mb-5"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#0C356A",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 className="mb-4 mx-2">About TextUtils</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0C356A",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>Easy to use</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0C356A",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0C356A",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              A user can easily use textUtils to customize text easily.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#0C356A",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2
            className="accordion-header"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0C356A",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0C356A",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>Customize Text</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Customize your text according to your desire e.g LowerCase,
              UpperCase , Capitalize etc{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0C356A",
                color: props.mode === "light" ? "black" : "white",
              }}
              aria-controls="collapseThree"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0C356A",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextUtils is a free platform to use which makes you work with much
              ease.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
