import React from 'react';
import ReactDOM from 'react-dom';
import EditIPantryItem from './EditIPantryItem';

describe('EditIPantryItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditIPantryItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});