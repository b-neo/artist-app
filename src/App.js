import React from "react";
import "./style.css";
import Home from "./components/home";
import Artist from "./components/artist";
import DP from "./components/dp";
import Contact from "./components/contact";
import { HashRouter, Route } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} />
            <Route path="/Artist" exact={true} component={Artist} />
            <Route path="/DP" exact={true} component={DP} />
            <Route path="/Contact" exact={true} component={Contact} />
        </HashRouter>
    );
}

export default App;
