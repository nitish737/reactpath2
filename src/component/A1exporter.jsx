import React from "react"; 
import { Route, Switch } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Navbar from "./Navbar";

const A1exporter = () => {
    return(
        <React.Fragment>

            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/contact" component={Contact}/>
                <Route exact path = "/about" component = {About}/>
            </Switch>
            <div className="navbar">
                <Navbar/>
            </div>
        </React.Fragment>
    )
}










export default A1exporter ;

