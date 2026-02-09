const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child-1"},React.createElement("h1",{},"This is H1 from Child1")),
    React.createElement("div",{id:"child-2"},React.createElement("h1",{},"This is H1 from Child2")),
])

root.render(heading);