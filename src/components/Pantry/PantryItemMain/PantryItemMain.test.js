import React from 'react';
import ReactDOM from 'react-dom';
import ItemMain from './ItemMain';

describe('ItemMain Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});