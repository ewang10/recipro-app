import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pantry from './Pantry';

describe('Pantry Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Pantry />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});