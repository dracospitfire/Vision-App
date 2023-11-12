import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Backend.js
import Backend from './BE-components/Backend';

import { AppProvider } from './UI-manager/AppContext';

const App = () => {
    return (//UI-manager will set the defult values and we start building larger components here
        <AppProvider>
            <Backend/>
        </AppProvider>
    );
};
export default App;
