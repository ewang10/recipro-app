import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FridgeFilter from './FridgeFilter';

describe('FridgeFilter Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FridgeFilter />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});