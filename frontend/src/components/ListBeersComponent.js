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
      this.deleteBeerClicked() == this.deleteBeerClicked.bind(this)
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

    deleteBeerClicked(id) {
        BeerDataService.deleteBeer(id)
            .then(
                response => {
                    this.setState({ message: `Delete of Beer ${id} Successful` })
                    this.refreshBeers()
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
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
                                        <td><button className="btn btn-warning" onClick={() => this.deleteBeerClicked(beer.beer_id)}>Delete</button></td>
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