import React from "react";
import ReactDOM from "react-dom";

/***
 * html structure
 *   <div id="parent">
        <div id="child">
            <h1> I am H1 tag</h1>
            <h2>I am h2 tag</h2>
        </div>
        <div id="child">
            <h1> I am H1 tag</h1>
            <h2>I am h2 tag</h2>
        </div>
    </div>
 */


const heading = React.createElement("div", {
    id: "parent",
}, [
    React.createElement("div", {
        id: "child"
    }
        , [
            React.createElement("h1", {}, "I am H1 tag. test 2"),
            React.createElement("h2", {}, "I am H2 tag. 2")]),

    React.createElement("div", {
        id: "child"
    }
        , [
            React.createElement("h1", {}, "I am H1 tag."),
            React.createElement("h2", {}, "I am H2 tag.")])

]);

console.log(heading) // object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);