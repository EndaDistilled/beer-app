import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BeerDataService from "../service/BeerDataService";

class BeerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            beer_name:'',
            alcohol_percentage:'',
            brewery_location:'',

        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        console.log(this.state.id)
        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        BeerDataService.retrieveBeer(this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                beer_name: response.data.beer_name,
                alcohol_percentage: response.data.alcohol_percentage,
                brewery_location: response.data.brewery_location,
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {
        let beer = {
            id: this.state.id,
            description: values.description
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(beer)
                .then(() => this.props.history.push('/courses'))
        } else {
            BeerDataService.updateBeer(this.state.id, beer)
                .then(() => this.props.history.push('/beers'))
        }

        console.log(values);
    }

    render() {
        let { description, id,beer_name,alcohol_percentage,brewery_location } = this.state

        return (
            <div>
                <h3>Beer</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, description,beer_name,alcohol_percentage,brewery_location }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="beer_name" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Alcohol Percentage</label>
                                        <Field className="form-control" type="number"  step="0.25" name="alcohol_percentage"/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Location</label>
                                        <Field className="form-control" type="text" name="brewery_location"/>
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