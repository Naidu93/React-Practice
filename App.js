import React from "react";
import ReactDOM from "react-dom/client";

// JSX(transpiled before it reaches the Js Engine)

const Title =()=> (
    <h1 className="heading" tabIndex="1">
        Hello React Using JSX 🚀
    </h1>
);

const Heading =()=>(
    <div id="container">
        <Title/>
        <h1 className="heading">Hello React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)

