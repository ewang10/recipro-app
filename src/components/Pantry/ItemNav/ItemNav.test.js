import React from 'react';
import ReactDOM from 'react-dom';
import ItemNav from './ItemNav';

describe('ItemNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemNav />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});