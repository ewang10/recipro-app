import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './AddGrocery';

describe('AddGrocery Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddGrocery />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});