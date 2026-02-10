import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child-1",key:"p1"},React.createElement("h1",{key:"1"},"This is H1 from Child1")),
    React.createElement("div",{id:"child-2",key:"p2"},React.createElement("h1",{key:"2"},"This is H1 from Child2")),
])

root.render(heading);