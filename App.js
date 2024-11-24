import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const heading = React.createElement('h1', { id: "heading" }, "Namesty React");
// console.log(heading);

// const jsxHeading = <h1 id="heading" className="blue">Namesty React Using JSX</h1>
// console.log(jsxHeading);


/**
 * 2 ways to create component
 * 1. class based component
 * 2. functional component -> normal js function which is returing jsx or reactelement or multiple reactElelment
 *                           Also its name should start with Capital letter with camel case 
 * 
 */
// functional component
const ele = <span>React Element span | </span>
const Title = () => (
    <h1 className="head" tabIndex='1'>
        {ele}
        Namesty React title
    </h1>
)

const HeadingComponent = () => (
    <div id="container">
        <h2>{1000}</h2>
        <h2>{console.log("testing....")}</h2>
        <Title />
        <h1 id="heading" className="blue">Namesty React Functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(jsxHeading);
root.render(<HeadingComponent />);

