import React, { Component } from 'react';
import { Formik } from 'formik';
import { apiMovieMap, apiMovie } from '../../../../config/api.movie';
import { thisExpression } from '@babel/types';
// import searchMovies from '../../config/api.movie';

export default class SearchBar extends Component {
    submit = (values, actions) => {
        this.props.fetchMovies(values).then(() => actions.setSubmitting(false));
    }


    getInitialValues = () => {
        return { query: '', language: 'fr-FR' };
    }

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues={this.getInitialValues()}
                enableReinitialize={true}
            >
                {({ handleSubmit, handlechange, handleBlur, isSubmitting }) => (
                    <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
                        <input name="query" className="flex-fill form-control mr-2" placeholder="Search ..." onChange={handlechange} onBlur={handleBlur} />
                        <select className="mr-2 form-control w-25" name="language" onChange={handlechange} onBlur={handleBlur}>
                            <option value="en-US" >Anglais</option>
                            <option value="fr-FR" >Français</option>
                        </select>
                        <button className="btn btn-small btn-success" type="submit" disabled={isSubmitting}>Submit</button>
                    </form>
                )}
            </Formik>
        )
    }
}