import {useState, createContext} from 'react';
import HomePage from './HomePage';

const userContext = createContext();


export default function App () {

    return (
        <div>
            <HomePage/>
        </div>
    )
}

