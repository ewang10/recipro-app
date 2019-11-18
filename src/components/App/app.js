import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import BottomNav from '../BottomNav/BottomNav';
import RecipeSearch from '../RecipeSearch/RecipeSearch';
import Fridge from '../Fridge/Fridge';
import Pantry from '../Pantry/Pantry';
import Grocery from '../Grocery/Grocery';
import Recipe from '../Recipe/Recipe';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <main>
          <Route exact path="/" component={RecipeSearch} />
          <Route path="/pantry" component={Pantry} />
          <Route path="/fridge" component={Fridge} />
          <Route path="/grocery" component={Grocery} />
          <Route path="/recipe" component={Recipe} />
        </main>
        <BottomNav />
      </div>
    );
  }
}

export default App;
