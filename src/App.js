import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfoliosPage from "./pages/PortfoliosPage";
import ContactPage from "./pages/ContactPage";
import BlogsPage from "./pages/BlogsPage";

const App = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <Navbar />
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/about" exact>
                            <AboutPage />
                        </Route>
                        <Route path="/portfolios" exact>
                            <PortfoliosPage />
                        </Route>
                        <Route path="/blogs" exact>
                            <BlogsPage />
                        </Route>
                        <Route path="/contact" exact>
                            <ContactPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default App;
