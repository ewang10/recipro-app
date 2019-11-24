import React from 'react';
import ReactDOM from 'react-dom';
import SearchItem from './SearchItem';

describe('SearchItem Component', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});