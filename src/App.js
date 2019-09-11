import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, MovieDetails, MovieList, Loading } from './components';
import dataMovies from './data';
import apiMovie from './config/api.movie';

// function App() {
//   return (
//     <div className="App d-flex flex-column">
//       <Header />
//       <div className="d-flex flex-row flex-fill pt-4 p-2">
//         <MovieList />
//         <MovieDetails />
//       </div>
//     </div>
//   );
// }
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }

    setTimeout(() => {
      this.setState({
        movies: dataMovies,
        loaded: true
      })
    }, 200)
  }

  updateSelectedMovie = (index) => {
    // const index = this.state.movies.findIndex((m) => {
    //   return title === m.title;
    // })
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then(response => console.log(response))
      .then(err => console.log(err));
  }
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2">
            <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
          </div>
        ) : (
            <Loading />
          )}
      </div>
    );
  }

}
export default App;
