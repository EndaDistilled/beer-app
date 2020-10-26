import React, { Component } from 'react';
import BeerDataService from "../service/BeerDataService";

class ListBeersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            message:null
        }
       this.refreshBeers() == this.refreshBeers.bind(this);
    }

    componentDidMount() {
        this.refreshBeers();
    }

    refreshBeers() {
        BeerDataService.retrieveAllBeers()
            .then(
                response => {
                    console.log(response);
                    this.setState({beers: response.data})
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Percentage</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.beers.map(
                                beer =>
                                    <tr key={beer.id}>
                                        <td>{beer.beer_id}</td>
                                        <td>{beer.beer_name}</td>
                                        <td>{beer.beer_description}</td>
                                        <td>{beer.brewery_location}</td>
                                        <td>{beer.alcohol_percentage}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListBeersComponent