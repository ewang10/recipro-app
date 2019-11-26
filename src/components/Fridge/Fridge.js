import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FridgeCategoryNav from '../Fridge/FridgeCategoryNav/FridgeCategoryNav';
import FridgeFilter from './FridgeFilter/FridgeFilter';
import FridgeContext from '../../contexts/FridgeContext';
import FridgeCategoryApiService from '../../services/fridge_category-api-service';
import FridgeItemApiService from '../../services/fridge_item-api-service';
import './Fridge.css';

class Fridge extends Component {
    static contextType = FridgeContext;

    componentDidMount() {
        this.context.clearError();
        FridgeCategoryApiService.getCategories()
            .then(categories => this.context.setCategories(categories))
            .catch(error => this.context.setError(error));

        FridgeItemApiService.getItems()
            .then(items => this.context.setItems(items))
            .catch(error => this.context.setError(error));
    }

    handleSideNav() {
        return (
            <>
                <FridgeCategoryNav />
            </>
        )
    }
    handleMain() {
        return (
            <>
                <FridgeFilter />
            </>
        )
    }
    render() {
        return (
            <section className="fridge-background">
                <div className="fridge">
                    <header>
                        <h2 onClick={() => this.context.reset()}>
                            <Link to="/fridge">Fridge</Link>
                        </h2>
                    </header>
                    <nav className="nav-side">{this.handleSideNav()}</nav>
                    <section className="item_filter">{this.handleMain()}</section>
                </div>
            </section>
        );
    }
}

export default Fridge;