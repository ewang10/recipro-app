import React from 'react';
import ReactDOM from 'react-dom';
import RecipeSearch from './RecipeSearch';

describe('RecipeSearch Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});