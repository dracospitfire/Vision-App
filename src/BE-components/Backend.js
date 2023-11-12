import React, { useContext } from 'react';              // standard react commonents
import { AppContext } from '../UI-manager/AppContext';  // manage react components in the UI
import "../App.css" ;                                   // adding styling to elements
import image from "../imgs/image.jpg";                  // adding images from imgs folder


const Backend = (props) => {
    const { variable } = useContext(AppContext);
    console.log(variable)
    // Backend components
    
    return (// HTML Code here
    <div className="App">
        <AppContext/>
        <header className="App-header">
            <img src={image} className="image" alt="image"/>
        </header>
    </div>
    );
};

export default Backend;