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

    /*
    state = {
        refresh: false
    }

    updateRefresh () {
        const newRefresh = !this.state.refresh;
        console.log('new refresh  ', newRefresh)
        this.setState({refresh: newRefresh})
    }
    */
    componentDidMount() {
        this.context.clearError();
        PantryCategoryApiService.getCategories()
            .then(categories => {
                //console.log('data retrieved ', categories);
                this.context.setCategories(categories)
                //console.log('data settted ', this.context.categories)
            })
            .catch(error => this.context.setError(error));
        
        PantryItemApiService.getItems()
            .then(items => this.context.setItems(items))
            .catch(error => this.context.setError(error));
    }

    handleSideNav() {
        //console.log(this.context.categories);
        return (
            <>
                <section>
                    <CategoryNav

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
                        categories={this.context.categories}
                        items={this.context.items}
                        //refresh={this.state.refresh}
                        //updateRefresh={() => this.updateRefresh()}
                    />
                </section>
            </>
        )
    }
    render() {
        return (
            <div className="pantry">
                <header>
                    <h2 /*onClick={() => this.updateRefresh()}*/>
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