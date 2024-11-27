import React from "react";
import ReactDOM from "react-dom/client";// Corrected import for React 18

// HELLO WORLD IN JS
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world";
// const root = document.getElementById("root");
// root.appendChild(heading);

// HELLO WORLD IN REACTJS
 // Correct import for React 18

const heading = React.createElement("h1", { id: "heading" }, "Hello World from ReactJS!");

// Use `createRoot` from `react-dom/client`
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

