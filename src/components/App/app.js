import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import BottomNav from '../BottomNav/BottomNav';
import RecipeSearch from '../RecipeSearch/RecipeSearch';
import Fridge from '../Fridge/Fridge';
import Pantry from '../Pantry/Pantry';
import Grocery from '../Grocery/Grocery';
import Recipe from '../Recipe/Recipe';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';

import CategoryNav from '../Pantry/CategoryNav/CategoryNav';
import PantryFilter from '../Pantry/PantryFilter/PantryFilter';
import PantryItemMain from '../Pantry/PantryItemMain/PantryItemMain';
import AddPantryCategory from '../Pantry/AddPantryCategory/AddPantryCategory';
import AddPantryItem from '../Pantry/AddPantryItem/AddPantryItem';

import FridgeCategoryNav from '../Fridge/FridgeCategoryNav/FridgeCategoryNav';
import FridgeFilter from '../Fridge/FridgeFilter/FridgeFilter';
import FridgeItemMain from '../Fridge/FridgeItemMain/FridgeItemMain';
import AddFridgeCategory from '../Fridge/AddFridgeCategory/AddFridgeCategory';
import AddFridgeItem from '../Fridge/AddFridgeItem/AddFridgeItem';
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
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />



          <Route
            exact path="/pantry-category/:category_id"
            component={CategoryNav}
          />

          <Route
            exact path="/pantry-category/:category_id"
            component={PantryFilter}
          />

          <Route
            exact path="/pantry-item/:item_id"
            component={PantryItemMain}

          />
          <Route
            exact path="/add-pantry-item"
            component={AddPantryItem}
          />
          <Route
            exact path="/add-pantry-category"
            component={AddPantryCategory}
          />


          <Route
            exact path="/fridge-category/:category_id"
            component={FridgeCategoryNav}
          />
          <Route
            exact path="/fridge-category/:category_id"
            component={FridgeFilter}
          />
          <Route
            path="/fridge-item/:item_id"
            component={FridgeItemMain}

          />
          <Route
            path="/add-fridge-category"
            component={AddFridgeCategory}
          />
          <Route
            path="/add-fridge-item"
            component={AddFridgeItem}
          />
        </main>
        <BottomNav />
      </div>
    );
  }
}

export default App;
