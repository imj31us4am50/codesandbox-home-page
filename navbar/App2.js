import "./styles2.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "/navbar/Logo.js";
import NavBar from "/navbar/NavBar.js";

export default function App() {
  return (
    <div className="Header container-fluid">
      <div className="image">
        <Logo />
      </div>
      <NavBar />
    </div>
  );
}
