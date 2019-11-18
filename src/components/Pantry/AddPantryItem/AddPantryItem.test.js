import React from 'react';
import ReactDOM from 'react-dom';
import AddPantryItem from './AddPantryItem';

describe('AddPantryItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPantryItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});