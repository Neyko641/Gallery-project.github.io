import React from 'react';
import './Gallery.styles.css';

export const GalleryComponent = (props) => {
    return (
        <div className="gallery-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h2> { props.monster.name } </h2>
            <p> {props.monster.username}</p>
        </div>
    );
}

export default GalleryComponent;
