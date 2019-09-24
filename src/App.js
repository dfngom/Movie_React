import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { apiMovie, apiMovieMap } from './config/api.movie';
import apiFirebase from './config/api.firebase';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import { FavoriList } from './features/favoris/components';
import Loadable from 'react-loadable';


const LazyFilms = Loadable({
  loader: () => import(/* WebpackChunkName: 'films' */ './features/films'),
  loading: () => <h1>Loading ...</h1>
})

const LazyFavoris = Loadable({
  loader: () => import(/* WebpackChunkName: 'favoris' */ './features/favoris'),
  loading: () => <h1>Loading ...</h1>
})

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
            <Route path="/films" component={LazyFilms} />
            <Route path="/favoris" component={LazyFavoris} />
            <Redirect to="/films" />
          </Switch>

        </div>
      </Router>

    );
  }

}
export default App;
