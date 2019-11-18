import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TopNav from './TopNav';

describe('TopNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <TopNav />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
