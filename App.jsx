// Correct import for React 18
import React from "react";
import ReactDOM from "react-dom/client";

// Creating a React element
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag"),
            ]
        )
    ]
);

// Logging the React object (Virtual DOM structure)
console.log("React object (Virtual DOM):", parent);

// Rendering the React element into the actual DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
