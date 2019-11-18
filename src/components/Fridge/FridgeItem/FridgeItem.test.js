import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FridgeItem from './FridgeItem';

describe('FridgeItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FridgeItem />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});