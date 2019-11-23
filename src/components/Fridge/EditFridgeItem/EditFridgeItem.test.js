import React from 'react';
import ReactDOM from 'react-dom';
import EditFridgeItem from './EditFridgeItem';

describe('EditFridgeItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditFridgeItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});