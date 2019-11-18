import React from 'react';
import ReactDOM from 'react-dom';
import AddFridgeItem from './AddFridgeItem';

describe('AddFridgeItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddFridgeItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});