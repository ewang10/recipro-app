import React from 'react';
import ReactDOM from 'react-dom';
import PantryItemMain from './PantryItemMain';

describe('PantryItemMain Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PantryItemMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});