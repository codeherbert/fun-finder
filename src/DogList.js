import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

function DogList(props) {
    return (
        <div className="DogList">
            <h1 className="display-1 text-center mt-3 mb-5">Fun Finder</h1>
            <div className="row">
                {props.dogs.map(d => (
                    <div className="DogList-Dog col-md-4 text-center" key={d.name}>
                        <Link to={`/home/${d.name}`}><img src={d.src} alt={d.name} /></Link>
                        <Link className="DogList-Name mt-3" to={`/home/${d.name}`}><h3>{d.name}</h3></Link>
                    </div>
                ))}                
            </div>
        </div>        
    )
}

export default DogList;