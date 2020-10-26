import React, { Component } from 'react';
import './App.css';
import BeerApp from './components/BeerApp';

class App extends Component {
    render() {
        return (
            <div className="container">
                <BeerApp />
            </div>
        );
    }
}

export default App;