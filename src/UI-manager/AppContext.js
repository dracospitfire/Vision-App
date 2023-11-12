import React, { createContext, useReducer } from 'react';
import '../App.css';
import logo from '../logo.svg';

// 1. Sets the initial state when the app loads
const initialState = { };

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provide BE-components - wraps the components we want to give access to the state
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider  
            value={{
                state, dispatch
            }}
        >
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                    Welcome <code><u>Vision Team!</u></code> This is your first React App.
                    </p>
                        <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        > Learn React
                        </a>
                </header>
            </div>
        </AppContext.Provider>
    );
};

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
};
