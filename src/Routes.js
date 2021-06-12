import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

class Routes extends Component {
    render() {
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
              dog => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetails {...props} dog={currentDog} />
        }
        return (
            <Switch>
                <Route exact path="/home" render={() => <DogList dogs={this.props.dogs} />} />;
                <Route exact path="/home/:name" render={getDog} />;
            </Switch>   
        )
    }
};

export default Routes;
