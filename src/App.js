import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <Navbar />
            </div>
            <div className="main-content">
                <div className="content">
                    <HomePage />
                </div>
            </div>
        </div>
    );
};

export default App;
