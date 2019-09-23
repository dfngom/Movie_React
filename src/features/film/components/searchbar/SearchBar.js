import React, { Component } from 'react';
import { Formik } from 'formik';
import { apiMovieMap, apiMovie } from '../../../../config/api.movie';
// import searchMovies from '../../config/api.movie';

export default class SearchBar extends Component {
    submit = (values, actions) => {

    }
    // submit = (values, actions) => {

    //     // console.log(searchMovies.searchMovies);

    //     searchMovies.searchMovies(values).then((movies) => {
    //         console.log(movies);
    //     })
    //     //  apiMovie.get('/search/movie' + query)
    //     //     .then(response => response.data.results)
    //     //     .then(moviesApi => {
    //     //         const movies = moviesApi.map(apiMovieMap);
    //     //         this.props.updateMovies(movies);
    //     //         actions.setSubmitting(false);
    //     //     })
    //     //     .catch(err => console.log(err));
    // }

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