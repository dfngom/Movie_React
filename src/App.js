import React, { Component } from 'react';
import { Header } from './components';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { fetchFavoris } from './store/actions';
// import { fecthFavoris as fecthFavoris } from './store/favoris/favoris.actions';
import { connect } from 'react-redux';





const LazyFilms = Loadable({
  loader: () => import(/* WebpackChunkName: 'films' */ './features/films'),
  loading: () => <h1>Loading ...</h1>
})

const LazyFavoris = Loadable({
  loader: () => import(/* WebpackChunkName: 'favoris' */ './features/favoris'),
  loading: () => <h1>Loading ...</h1>
})



class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Switch>
          <Route path="/films" component={LazyFilms} />
          <Route path="/favoris" component={LazyFavoris} />
          <Redirect to="/films" />
        </Switch>
      </div>
    );
  }

}

export default withRouter(connect(null, {
  fetchFavoris
})(App));
