import React from 'react';
import { GalleryComponent } from '../Gallery/Gallery.component'
import './Gallery-list.styles.css';

export const GalleryListComponent = (props) => {
    return (
        <div className= "GalleryList">
          {props.monsters.map(monster => (
            <GalleryComponent key={monster.id} monster={monster}/>
        ))}
        </div>
    );
}

export default GalleryListComponent;
