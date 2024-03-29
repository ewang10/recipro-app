import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Fridge from './Fridge';

describe('Fridge Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Fridge />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});