import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/app';
import { PantryProvider } from './contexts/PantryContext';
import { FridgeProvider } from './contexts/FridgeContext';


ReactDOM.render(
    <BrowserRouter>


                <App />


    </BrowserRouter>,
    document.getElementById('root'));



