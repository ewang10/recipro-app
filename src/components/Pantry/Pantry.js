import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryNav from './CategoryNav/CategoryNav';
import PantryFilter from './PantryFilter/PantryFilter';
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
        /*
        let comp;
        if (this.props.match.path === "/pantry" ||
            this.props.match.path === "/pantry-category/:category_id") {
            comp = (
                <section>
                    <CategoryNav
                        categories={this.categories}
                    />
                </section>
            );
        }
        */
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