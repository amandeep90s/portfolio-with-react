import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <Navbar />
            </div>
            <div className="main-content"></div>
        </div>
    );
};

export default App;
