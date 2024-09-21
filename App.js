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
const parent = React.createElement("div",
    { id: "parent" },
    [ 
        React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", {id:"heading"}, "I am h1 tag"), 
            React.createElement("h1", {}, "I am h2 tag")
        ]),
        React.createElement("div", { id: "child2" },  // Changed id to "child2" to avoid duplicate IDs
        [
            React.createElement("h1", {}, "I am h1 tag"), 
            React.createElement("h1", {}, "I am h2 tag")
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
