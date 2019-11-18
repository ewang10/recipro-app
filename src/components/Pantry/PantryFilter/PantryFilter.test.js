import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PantryFilter from './PantryFilter';

describe('PantryFilter Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PantryFilter />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});