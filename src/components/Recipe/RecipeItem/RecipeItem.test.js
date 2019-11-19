import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RecipeItem from './RecipeItem';

describe('RecipeItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <RecipeItem />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
