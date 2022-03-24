import NavBarCSS from "/navbar/NavBar.css";
import React, { useState, useEffect } from "react";

export default function Nav() {
  return (
    <div class="navbar rowa" style={NavBarCSS}>
      <ul class="nav-list one rowa">
        <li class="nav-item current">
          <a href="#inserthomelink">ACASĂ</a>
        </li>
        <li class="nav-item">
          <a href="#insertarticleslink">ARTICOLE</a>
        </li>
        <li class="nav-item">
          <a href="#insertdonatelink">DONEAZĂ</a>
        </li>
      </ul>

      <ul class="nav-list two rowa">
        <li class="nav-item">
          <a href="#insertaboutlink">DESPRE</a>
        </li>
        <li class="nav-item bg">
          <a href="#insertmyacclink">CONTUL MEU</a>
        </li>
      </ul>
    </div>
  );
}
