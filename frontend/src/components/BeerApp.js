import React, { Component } from 'react';
import ListBeersComponent from "./ListBeersComponent";
import BeerComponent from "./BeerComponent";

class BeerApp extends Component {
    render() {
        return (<>
            <h1>Beer Application</h1>
            <ListBeersComponent/>
            <BeerComponent/>
             </>
        )
    }
}

export default BeerApp