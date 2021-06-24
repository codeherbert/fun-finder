// import React, {Component} from 'react';

// class DogList extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Dog List!</h1>
//             </div>
//         )
//     }
// }

// export default DogList;

import React, { useState} from 'react';
import './DogList.css';

function DogList(props) {
    return (
        <div className="DogList">
            <h1 className="display-1 text-center">Dog List!</h1>
            <div className="row">
                {props.dogs.map(d => (
                    <div className="DogList-Dog col-md-4 text-center" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h3>{d.name}</h3>
                    </div>
                ))}                
            </div>
        </div>        
    )
}

export default DogList;