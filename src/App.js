import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, MovieDetails, MovieList } from './components';

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
      movies: [
        {
          title: 'Creative Ones',
          img: 'https://www.creative-ones.com/assets/blog/2016/09/aEsti-pregatit-pentru-viitor-Internet-of-Things-IoT-este-tot-mai-aproape-de-tine.jpg',
          details: 'R | 175 min | Crime, Technologies',
          description: `These days it plays on the screen I.T. with Pierce Brosnan in the lead role. Like any American film, there are a number of reviews that catalog it as a poor film, but there are also some good reviews.
          We live in the smart era of technology and custom applications. We have smartphone, smart TV, smartwatch. We want everything around us to be smarter and give us more comfort.`,
        },
        {
          title: 'Hacking Democracy',
          img: 'https://upload.wikimedia.org/wikipedia/en/1/11/Hackingdemocracydvdcover.jpg',
          details: 'R | 155 min | War, Technologies',
          description: 'Hacking Democracy est un film documentaire, sorti le 2 novembre 2006, de Simon Ardizzone et Russell Michaels, produit par Simon Ardizzone, Robert Carrillo Cohen et Russell Michaels. Il a été diffusé initialement sur la chaîne HBO',
        },
        {
          title: 'Fast & Furious',
          img: 'data:image/jpeg;base64,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',
          details: 'PG-13 | 125 min | Drama, Technologies, Action',
          description: 'Depuis que Hobbs et Shaw se sont affrontés, les deux hommes font tout pour se nuire l\'un à l\'autre. Mais lorsque Brixton, un anarchiste génétiquement modifié, met la main sur une arme de destruction massive après avoir battu le meilleur agent du MI6 qui se trouve être la soeur de Shaw.',
        },
        {
          title: 'Black Panther',
          img: 'http://fr.web.img4.acsta.net/r_1280_720/pictures/17/11/10/09/24/4977215.jpg',
          details: 'R | 200 min | Aventure, Technologies, War',
          description: 'Après les événements qui se sont déroulés dans Captain America : Civil War, T\'Challa revient chez lui prendre sa place sur le trône du Wakanda, une nation africaine technologiquement très avancée mais lorsqu\'un vieil ennemi resurgit, le courage de T\'Challa est mis à rude épreuve, aussi bien en tant …',
        },
      ],
      selectedMovie: 0
    }
  }
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList />
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }

}
export default App;
