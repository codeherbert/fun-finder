import React, { Component } from 'react';

class DogDetails extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.dog.name}</h1>
            </div>
        )
    }
}

export default DogDetails;