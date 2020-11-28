import React, { Component } from 'react';
import ListBeersComponent from "./ListBeersComponent";
import BeerComponent from "./BeerComponent";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function BeerApp() {
    return(
        <div className="wrapper">
            <h1>Beer Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ListBeersComponent} />
                    <Route path="/beers" exact component={ListBeersComponent} />
                    <Route path="/beers/:id" component={BeerComponent} />
                </Switch>
            </BrowserRouter>
             </div>
        )
    }

export default BeerApp