import React from 'react';
import ReactDOM from 'react-dom';
import AddPantryCategory from './AddPantryCategory';

describe('AddPantryCategory Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPantryCategory />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});