/**
 * <div id="parent">
 *    <div id="child1">
 *    <h1>I am H! tag</h1>
 *    <h2>I am H2 tag</h2>
 *    </div>
 *     <div id="child2">
 *    <h1>I am H! tag</h1>
 *    <h2>I am H2 tag</h2>
 *    </div>
 * <div>
 */

// const heading =React.createElement("h1",{id:"heading"},"Hello world from React!");

// console.log(heading);//return object
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create React element for the parent div with id "parent"
console.log('hello');
const parent = React.createElement("div",
    { id: "parent" },
    [ 
        React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", {id:"heading"}, "This is First React 🚀"), 
            React.createElement("h2", {}, "I am Shubham")
        ]),
        React.createElement("div", { id: "child2" },  // Changed id to "child2" to avoid duplicate IDs
        [
            React.createElement("h1", {}, "Who started Learning"), 
            React.createElement("h2", {}, "On 21st OCT 2023")
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
