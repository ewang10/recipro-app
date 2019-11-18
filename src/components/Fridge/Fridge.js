import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FridgeCategoryNav from '../Fridge/FridgeCategoryNav/FridgeCategoryNav';
import FridgeFilter from './FridgeFilter/FridgeFilter';

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
            expiration_date: "2017-11-1",
            note: "some note..."
        },
        {
            id: 2,
            name: "milk",
            category_id: 1,
            modified: new Date(),
            expiration_date: "2017-11-1",
            note: "some note..."
        },
        {
            id: 3,
            name: "flour",
            category_id: 2,
            modified: new Date(),
            expiration_date: "2017-11-1",
            note: "some note..."
        },
        {
            id: 4,
            name: "canned tuna",
            category_id: 3,
            modified: new Date(),
            expiration_date: "2017-11-1",
            note: "some note..."
        }
    ];

    handleSideNav() {
        return (
            <>
                <section>
                    <FridgeCategoryNav
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
                    <FridgeFilter
                        categories={this.categories}
                        items={this.items}
                    />
                </section>



                

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