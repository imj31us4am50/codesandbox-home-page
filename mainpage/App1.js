import "./styles1.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "/mainpage/Title.js";
import Component1 from "/mainpage/Component1.js";
import Title1 from "/mainpage/Title1.js";
import Component2 from "/mainpage/Component2.js";

export default function App1() {
  return (
    <div className="container-fluid p-5">
      <Title />
      <Component1 />
      <Title1 />
      <Component2 />
    </div>
  );
}
