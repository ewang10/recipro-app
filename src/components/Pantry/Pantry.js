import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryNav from './CategoryNav/CategoryNav';
import PantryFilter from './PantryFilter/PantryFilter';
import PantryContext from '../../contexts/PantryContext';
import PantryCategoryApiService from '../../services/pantry_category-api-service';
import PantryItemApiService from '../../services/pantry_item-api-service';
import './Pantry.css';

class Pantry extends Component {
    static contextType = PantryContext;

    componentDidMount() {
        this.context.clearError();
        PantryCategoryApiService.getCategories()
            .then(categories => {
                this.context.setCategories(categories)
            })
            .catch(error => this.context.setError(error));

        PantryItemApiService.getItems()
            .then(items => this.context.setItems(items))
            .catch(error => this.context.setError(error));
    }

    handleSideNav() {
        return (
            <>
                <section>
                    <CategoryNav />
                </section>
            </>
        )
    }
    handleMain() {
        return (
            <>
                <section>
                    <PantryFilter />
                </section>
            </>
        )
    }
    render() {
        return (
            <section className="pantry-background">
                <div className="pantry">
                    <header>
                        <h2 onClick={() => this.context.reset()}>
                            <Link to="/pantry">Pantry</Link>
                        </h2>
                    </header>
                    <nav className="nav-side">{this.handleSideNav()}</nav>
                    <section className="item_filter">{this.handleMain()}</section>
                </div>
            </section>
        );
    }
}

export default Pantry;