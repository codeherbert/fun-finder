import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogDetails.css';

class DogDetails extends Component {
    render() {
        var { dog } = this.props;
        return (
            <div className="DogDetails row justify-content-center my-5">
                <div className="col-11 col-lg-5">
                    <div className="DogDetails-card card">
                        <img className="card-img-top" src={dog.src} alt={dog.name} />
                        <div className="card-body">
                            <div className="card-title">{ dog.name }</div>
                            <div className="card-subtitle text-muted">{ dog.age } years old</div>
                        </div>
                        <ul className="list-group list-group-flush">
                            {dog.facts.map((fact, i) => (
                                <li className="list-group-item" key={i}>
                                    {fact}
                                </li>
                            ))}
                        </ul>
                        <div className="card-body">
                                <Link to="/home" className="btn btn-info">Go Back</Link>           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogDetails;