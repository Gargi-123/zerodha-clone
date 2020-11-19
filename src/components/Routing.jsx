import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import Pricing from "./Pricing"
import Support from "./Support"
import Signup from "./Signup"


class Routing extends Component {

    render() {
        return (
            <Switch>
                <Route path="/About" exact component={About} />
                <Route path="/" exact component={Home} />
                <Route path="/Products" exact component={Products} />
                <Route path="/Pricing" exact component={Pricing} />
                <Route path="/Support" exact component={Support} />
                <Route path="/Signup" exact component={Signup} />
            </Switch>
        );
    }
}

export default Routing;

