import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PantryItem from './PantryItem';

describe('PantryItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PantryItem />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});