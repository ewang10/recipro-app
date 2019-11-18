import React from 'react';
import ReactDOM from 'react-dom';
import FridgeItemMain from './FridgeItemMain';

describe('FridgeItemMain Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FridgeItemMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});