import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import BottomNav from '../BottomNav/BottomNav';
import RecipeSearch from '../RecipeSearch/RecipeSearch';
import Fridge from '../Fridge/Fridge';
import Pantry from '../Pantry/Pantry';
import Grocery from '../Grocery/Grocery';
import Recipe from '../Recipe/Recipe';
import RecipeDetail from '../Recipe/RecipeDetail/RecipeDetail';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';

//import CategoryNav from '../Pantry/CategoryNav/CategoryNav';
//import PantryFilter from '../Pantry/PantryFilter/PantryFilter';
import PantryItemMain from '../Pantry/PantryItemMain/PantryItemMain';
import AddPantryCategory from '../Pantry/AddPantryCategory/AddPantryCategory';
import AddPantryItem from '../Pantry/AddPantryItem/AddPantryItem';

//import FridgeCategoryNav from '../Fridge/FridgeCategoryNav/FridgeCategoryNav';
//import FridgeFilter from '../Fridge/FridgeFilter/FridgeFilter';
import FridgeItemMain from '../Fridge/FridgeItemMain/FridgeItemMain';
import AddFridgeCategory from '../Fridge/AddFridgeCategory/AddFridgeCategory';
import AddFridgeItem from '../Fridge/AddFridgeItem/AddFridgeItem';
import './app.css';

class App extends Component {
  recipes = [
    {
      id: 1,
      name: "Chicken Vesuvio",
      image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
      url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
      ingredients: [
        "1/2 cup olive oil",
        "5 cloves garlic, peeled",
        "2 large russet potatoes, peeled and cut into chunks",
        "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
        "3/4 cup white wine",
        "3/4 cup chicken stock",
        "3 tablespoons chopped parsley",
        "1 tablespoon dried oregano",
        "Salt and pepper",
        "1 cup frozen peas, thawed"
      ]
    }, {
      id: 2,
      name: "Chicken Vesuvio",
      image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
      url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
      ingredients: [
        "1/2 cup olive oil",
        "5 cloves garlic, peeled",
        "2 large russet potatoes, peeled and cut into chunks",
        "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
        "3/4 cup white wine",
        "3/4 cup chicken stock",
        "3 tablespoons chopped parsley",
        "1 tablespoon dried oregano",
        "Salt and pepper",
        "1 cup frozen peas, thawed"
      ]
    }, {
      id: 3,
      name: "Chicken Vesuvio",
      image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
      url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
      ingredients: [
        "1/2 cup olive oil",
        "5 cloves garlic, peeled",
        "2 large russet potatoes, peeled and cut into chunks",
        "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
        "3/4 cup white wine",
        "3/4 cup chicken stock",
        "3 tablespoons chopped parsley",
        "1 tablespoon dried oregano",
        "Salt and pepper",
        "1 cup frozen peas, thawed"
      ]
    }
  ];
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
          <Route 
            path="/recipe-item/:recipe_id" 
            render={() =>
              <RecipeDetail
                recipes={this.recipes}
              />
            } 
          />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />



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
