import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Grocery from './Grocery';

describe('Grocery Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Grocery />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});