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

// const heading = React.createElement("h1", {id:"heading"}, "This is First React 🚀");
const jsxHeading =()=>(
    <h1 id="heading">
    This is First React JSX 🚀
    </h1>
    );
const Title = () => (
     <h1 className='ele'>
    This Component 🚀
    </h1>);
    const x=100;
    
const hello =(
    <h1 className='ele'>
    This is First React Component 🚀
    </h1>
    );
//Functional componenet
const Headingcomponenet = () => (<div id="container">
    < Title />
    <h1>{x}</h1>
    {
        hello
    }
    <h1>This is Functional componenet</h1>
</div>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponenet />);

