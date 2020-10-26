import React, { Component } from 'react';
import ListBeersComponent from "./ListBeersComponent";

class BeerApp extends Component {
    render() {
        return (<>
            <h1>Beer Application</h1>
            <ListBeersComponent/>
             </>
        )
    }
}

export default BeerApp