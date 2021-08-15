import React, {Component} from 'react';
import NavbarMain from './Navbar';
import Routes from './Routes';
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
          "Gadget often wants to cuddle with you."
        ]
      },
      {
        name: "Dino",
        age: 3,
        src: dino,
        facts: [
          "Dino has endless amounts of energy.",
          "Dino is highly intelligent.",
          "Dino loves humans more than dogs."
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
    return (
      <div>
        <NavbarMain dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
