import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';

describe('RecipeDetail Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <RecipeDetail />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
