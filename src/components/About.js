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
             The <b>textUtils</b> app boasts user-friendly features, ensuring a straightforward and intuitive experience for customization. With a simple interface, users can effortlessly navigate and personalize text content, making it an easy-to-use tool. Its accessibility and simplicity make text customization a seamless process for all users.
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
            The Customize Text feature offers a hassle-free experience, providing users with a straightforward and intuitive way to tailor text elements within the app. Its user-friendly interface ensures easy navigation and effortless customization, making the process of personalizing text content both accessible and efficient.
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
              The Free to Use attribute underscores the app's accessibility, allowing users to enjoy its functionalities without any cost. With an uncomplicated setup, the app provides a seamless experience, making it not only valuable but also freely available for all users to leverage without financial constraints.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
