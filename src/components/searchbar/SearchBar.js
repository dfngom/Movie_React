import React, { Component } from 'react';
import { Formik } from 'formik';

export default class SearchBar extends Component {
    submit = (values, actions) => {

    }

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues={{ query: '' }}
            >
                {({ handleSubmit, handlechange, handleBlur, isSubmitting }) => (
                    <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
                        <input name="query" className="flex-fill form-control mr-2" placeholder="Search ..." onChange={handlechange} onBlur={handleBlur} />
                        <button className="btn btn-small btn-success" type="submit" disabled={isSubmitting}>Submit</button>
                    </form>
                )}
            </Formik>
        )
    }
}