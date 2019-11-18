import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CategoryNav from './CategoryNav/CategoryNav';
import ItemNav from './ItemNav/ItemNav';
import PantryFilter from './PantryFilter/PantryFilter';
import PantryItemMain from './PantryItemMain/PantryItemMain';
import PantryItem from './PantryItem/PantryItem';
import AddPantryCategory from './AddPantryCategory/AddPantryCategory';
import AddPantryItem from './AddPantryItem/AddPantryItem';
import './Pantry.css';

class Pantry extends Component {
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
                <section>
                    <CategoryNav
                        categories={this.categories}
                    />
                </section>
            
            </>
        )
    }
    handleMain() {
        return (
            <>
                <section>
                    <PantryFilter
                        categories={this.categories}
                        items={this.items}
                    />
                </section>






            </>
        )
    }
    render() {
        return (
            <div className="pantry">
                <header>
                    <h2>
                        <Link to="/pantry">Pantry</Link>
                    </h2>
                </header>
                <nav className="nav-side">{this.handleSideNav()}</nav>
                <section className="item_filter">{this.handleMain()}</section>
            </div>
        );
    }
}

export default Pantry;