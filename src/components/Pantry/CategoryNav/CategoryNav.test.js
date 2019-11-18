import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CategoryNav from './CategoryNav';

describe('CategoryNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CategoryNav />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});