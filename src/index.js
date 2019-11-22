import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/app';
import { PantryProvider } from './contexts/PantryContext';


ReactDOM.render(
    <BrowserRouter>
        <PantryProvider>
            <App />
        </PantryProvider>
    </BrowserRouter>,
    document.getElementById('root'));



