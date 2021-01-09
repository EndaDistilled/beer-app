import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BeerDataService from "../service/BeerDataService";

class BeerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: this.props.match.params.description
        }

    }

    componentDidMount() {
        console.log(this.state.id)
        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        BeerDataService.retrieveBeer(this.state.id)
            .then(response => this.setState({
                beer_description: response.data.beer_description
            }))
    }
    render() {
        let { description, id } = this.state

        return (
            <div>
                <h3>Beer</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, beer_description }}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }

}

export default BeerComponent