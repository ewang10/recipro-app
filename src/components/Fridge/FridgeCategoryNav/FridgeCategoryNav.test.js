import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FridgeCategoryNav from './FridgeCategoryNav';

describe('FridgeCategoryNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FridgeCategoryNav />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});