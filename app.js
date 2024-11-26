import React from "react";
import ReactDOM from "react-dom";

//HELLO WORLD IN JS
// const heading=document.createElement("h1");
// heading.innerHTML="Hello world";
// const root= document.getElementById("root");
// root.appendChild(heading);

//HELLO WORLD IN REACTJS
const heading = React.createElement("h1", {id: "heading"}, "Hello World form React!!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)