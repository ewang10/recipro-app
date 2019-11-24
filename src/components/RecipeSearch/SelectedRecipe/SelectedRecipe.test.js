import React from 'react';
import ReactDOM from 'react-dom';
import SelectedRecipe from './SelectedRecipe';

describe('SelectedRecipe Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SelectedRecipe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
