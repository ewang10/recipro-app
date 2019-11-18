import React from 'react';
import ReactDOM from 'react-dom';
import Fridge from './Fridge';

describe('Fridge Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Fridge />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});