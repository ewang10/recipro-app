import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ItemMain from './ItemMain';

describe('ItemMain Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ItemMain />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});