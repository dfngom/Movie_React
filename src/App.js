import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { apiMovie, apiMovieMap } from './config/api.movie';
import apiFirebase from './config/api.firebase';
import Films from './features/film';
import Favoris from './features/favoris';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { FavoriList } from './features/favoris/components';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: null
    }


  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then(response => response.data.results)
      .then(moviesApi => {

        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch(err => console.log(err));


  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favoris ? true : false
    })
  }

  updateFavoris = (favoris) => {
    this.setState({
      favoris,
      loaded: this.state.movies ? true : false
    })
  }

  addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find(m => m.title === title);
    favoris.push(film);
    this.setState({
      favoris
    }, () => {
      this.saveFavoris();
    })

  }

  removeFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex(f => f.title === title);
    favoris.splice(index, 1);
    this.setState({
      favoris
    }, () => {
      this.saveFavoris();
    })
  }



  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route path="/films" render={(props) => {
              return (
                <Films
                  {...props}
                  loaded={this.state.loaded}
                  updateMovies={this.updateMovies}
                  updateSelectedMovie={this.updateSelectedMovie}
                  movies={this.state.movies}
                  selectedMovie={this.state.selectedMovie}
                  addFavori={this.addFavori}
                  removeFavori={this.removeFavori}
                  favoris={this.state.favoris}
                />
              )
            }} />
            <Route path="/favoris" render={(props) => {
              return (
                <Favoris
                  {...props}
                  loaded={this.state.loaded}
                  favoris={this.state.favoris}
                  removeFavori={this.removeFavori}
                />
              )
            }} />
            <Redirect to="/films" />
          </Switch>

        </div>
      </Router>

    );
  }

}
export default App;
