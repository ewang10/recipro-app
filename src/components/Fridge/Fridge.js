import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CategoryNav from '../Pantry/CategoryNav/CategoryNav';

import FridgeFilter from './FridgeFilter/FridgeFilter';
import FridgeItemMain from './FridgeItemMain/FridgeItemMain';
import AddFridgeCategory from './AddFridgeCategory/AddFridgeCategory';
import AddFridgeItem from './AddFridgeItem/AddFridgeItem';
import './Fridge.css';

class Fridge extends Component {
    categories = [
        {
            id: 1,
            name: "Dairy"
        },
        {
            id: 2,
            name: "Baking"
        },
        {
            id: 3,
            name: "Canned Foods"
        }
    ];

    items = [
        {
            id: 1,
            name: "cheese",
            category_id: 1,
            modified: new Date(),
            expiration_date: new Date(),
            note: "some note..."
        },
        {
            id: 2,
            name: "milk",
            category_id: 1,
            modified: new Date(),
            expiration_date: new Date(),
            note: "some note..."
        },
        {
            id: 3,
            name: "flour",
            category_id: 2,
            modified: new Date(),
            expiration_date: new Date(),
            note: "some note..."
        },
        {
            id: 4,
            name: "canned tuna",
            category_id: 3,
            modified: new Date(),
            expiration_date: new Date(),
            note: "some note..."
        }
    ];

    handleSideNav() {
        return (
            <>
                <Route
                    path="/fridge"
                    render={() =>
                        <CategoryNav
                            categories={this.categories}
                        />
                    }
                />
                <Route
                    path="/fridge-category/:category_id"
                    render={() =>
                        <CategoryNav
                            categories={this.categories}
                        />
                    }
                />
  
            </>
        )
    }
    handleMain() {
        return (
            <>
                <Route
                    path="/fridge"
                    render={() =>
                        <FridgeFilter
                            categories={this.categories}
                            items={this.items}
                        />
                    }
                />
                <Route
                    path="/fridge-category/:category_id"
                    render={() =>
                        <FridgeFilter
                            categories={this.categories}
                            items={this.items}
                        />
                    }
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

            </>
        )
    }
    render() {
        return (
            <div className="fridge">
                <header>
                    <h2>
                        <Link to="/fridge">Fridge</Link>
                    </h2>
                </header>
                <nav className="nav-side">{this.handleSideNav()}</nav>
                <section className="item_filter">{this.handleMain()}</section>
            </div>
        );
    }
}

export default Fridge;