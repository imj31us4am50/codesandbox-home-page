import "./styles1.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title1 from "/mainpage/Title1.js";
import Component1 from "/mainpage/Component1.js";
import Title2 from "/mainpage/Title2.js";
import Component2 from "/mainpage/Component2.js";
import Title3 from "/mainpage/Title3.js";
import Component3 from "/mainpage/Component3.js";
import Title4 from "/mainpage/Title4.js";
import Component4 from "/mainpage/Component4.js";
import Component41 from "/mainpage/Component41.js";
import Component42 from "/mainpage/Component42.js";

export default function App1() {
  return (
    <div className="container-fluid p-5">
      <Title1 />
      <Component1 />
      <Title2 />
      <Component2 />
      <Title3 />
      <Component3 />
      <Title4 />
      <Component4 />
      <Component41 />
      <Component42 />
    </div>
  );
}
