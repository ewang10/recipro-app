import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchItem from './SearchItem';

describe('SearchItem Component', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SearchItem />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});