import React from 'react';
import ReactDOM from 'react-dom';
import GroceryItem from './GroceryItem';

describe('GroceryItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroceryItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});