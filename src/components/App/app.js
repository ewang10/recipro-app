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
import EditPantryItem from '../Pantry/EditIPantryItem/EditIPantryItem';
//import FridgeCategoryNav from '../Fridge/FridgeCategoryNav/FridgeCategoryNav';
//import FridgeFilter from '../Fridge/FridgeFilter/FridgeFilter';
import FridgeItemMain from '../Fridge/FridgeItemMain/FridgeItemMain';
import AddFridgeCategory from '../Fridge/AddFridgeCategory/AddFridgeCategory';
import AddFridgeItem from '../Fridge/AddFridgeItem/AddFridgeItem';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import IdleService from '../../services/idle-service';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './app.css';

//import { FridgeProvider } from '../../contexts/FridgeContext';

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
  componentDidMount() {
    // Set the idle callback function to logout a user
    //from being idle
    IdleService.setIdleCallback(this.logoutFromIdle);

    //If the user is logged in
    if (TokenService.hasAuthToken()) {

      // Regist the event listeners, so that when a user
      // interacts with the page the event listener will fire
      IdleService.registerIdleTimerResets();

      // Queue the callback function to have token refresh
      // just before token expires
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      });
    }
  }

  componentWillUnmount() {
    // Unregister event listeners that checks for user interactivity
    IdleService.unRegisterIdleResets();

    // Remove refresh token request
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();

    // Clear callback go refresh api, and unregister event listners
    // that tracks user interactivity
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <TopNav />
        <main>
          <Route exact path="/" component={RecipeSearch} />
          <PrivateRoute exact path="/pantry" component={Pantry} />
          <PrivateRoute path="/fridge" component={Fridge} />
          <PrivateRoute path="/grocery" component={Grocery} />
          <PrivateRoute path="/recipe" component={Recipe} />
          <PrivateRoute
            path="/recipe-item/:recipe_id"
            render={() =>
              <RecipeDetail
                recipes={this.recipes}
              />
            }
          />
          <PublicOnlyRoute path="/register" component={RegistrationForm} />
          <PublicOnlyRoute path="/login" component={LoginForm} />

          <PrivateRoute
            path="/pantry-category"
            component={Pantry}
          />

          <PrivateRoute
            path="/pantry-item/:item_id"
            component={PantryItemMain}

          />
          <PrivateRoute
            path="/add-pantry-item"
            component={AddPantryItem}
          />
          <PrivateRoute
            path="/add-pantry-category"
            component={AddPantryCategory}
          />
          <PrivateRoute
            path='/edit-pantry-item/:item_id'
            component={EditPantryItem}
          />

          <PrivateRoute
            path="/fridge/fridge-category"
            component={Fridge}
          />

          <PrivateRoute
            path="/fridge-item/:item_id"
            component={FridgeItemMain}

          />
          <PrivateRoute
            path="/add-fridge-category"
            component={AddFridgeCategory}
          />
          <PrivateRoute
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
