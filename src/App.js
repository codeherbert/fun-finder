import React, {Component} from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import NavbarMain from './Navbar';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import gadget from './img/gadget.jpg';
import dino from './img/dino.jpg';
import tubby from './img/tubby.jpg';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Gadget",
        age: 5,
        src: gadget,
        facts: [
          "Gadget loves eating popcorn.",
          "Gadget is a terrible guard dog.",
          "Gadget wants to cuddle with you."
        ]
      },
      {
        name: "Dino",
        age: 3,
        src: dino,
        facts: [
          "Dino has sooo much energy.",
          "Dino is highly intelligent.",
          "Dino loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 8,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog.",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };

  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <div>
        <NavbarMain dogs={this.props.dogs} />
        <Switch>
          <Route exact path="/home" render={() => <DogList dogs={this.props.dogs} />} />;
          <Route exact path="/home/:name" render={getDog} />;
        </Switch>
      </div>
    );
  }
}

export default App;
