import React from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
      <Link to={`/character/${props.id}`} className="card-link">
        <div className="Card">
            <Link to={'edit/' + props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
            <h2 className="name">{props.name}</h2>
            <img src={props.characterImage} alt={props.character} />
            <h3 className="character">{props.character}</h3>
            <p className="play_style">{props.play_style}</p>
        </div>
      </Link>
    );
};

export default Card;
