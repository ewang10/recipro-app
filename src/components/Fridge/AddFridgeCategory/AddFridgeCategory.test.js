import React from 'react';
import ReactDOM from 'react-dom';
import AddFridgeCategory from './AddFridgeCategory';

describe('AddFridgeCategory Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddFridgeCategory />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});