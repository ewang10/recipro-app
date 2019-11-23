import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FridgeItemMain from './FridgeItemMain';

describe('FridgeItemMain Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FridgeItemMain />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});