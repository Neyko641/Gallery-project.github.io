import React from 'react';
import './search-box.styles.css';


export const SearchBoxComponent = ({handleChange}) => {
    return (
        <div>
            <input  className ="SearchField"
               type='search' 
               onChange = {handleChange}  
               />
        </div>
    );
}
