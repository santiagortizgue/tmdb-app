import React from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = function (props) {
    return (<Link to={`/Movie/${props.id}`}>
        <div className="film">
            <img src={props.img} className="film-img" alt={props.title} />
            <div className="film-body">
                <h5 className="film-body-title">{props.title}</h5>
            <h4 className="film-body-average">{props.average}</h4>
            </div>
        </div>
    </Link>)
}

export default MovieCard;