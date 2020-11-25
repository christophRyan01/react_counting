import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = {
    counter: 5
};

ReactDOM.render(
    <App data={data} />, 
    document.getElementById("root")
    );

