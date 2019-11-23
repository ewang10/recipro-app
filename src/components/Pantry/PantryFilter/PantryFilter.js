import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PantryItem from '../PantryItem/PantryItem';
import PantryContext from '../../../contexts/PantryContext';
import './PantryFilter.css';

class PantryFilter extends Component {
    static contextType = PantryContext;

    /*
    componentWillReceiveProps(props) {
        console.log('trigger...')
        console.log('props ', props.refresh)
        console.log('this props ', this.props.refresh)
        if (props.refresh !== this.props.refresh) {
            console.log('force refresh')
            this.props.updateRefresh()
        }
    }
    */
    noFilter() {
        const items = this.context.items
            .map((item, i) => (
                <PantryItem
                    item={item}
                    key={i}
                    history={this.props.history}
                />
            ))
        return items;
    }

    itemFilter() {
        const items = this.context.items
            .filter(item => item.categoryid === this.context.category.id)
            .map((item, i) => (
                <PantryItem
                    item={item}
                    key={i}
                    history={this.props.history}
                />
            ))
        //console.log('items ', items)
        return items;
    }

    render() {
        /*
        let items;
        
        if (!this.context.items) {

            items = [];
        } else if (this.context.category) {

            items = this.itemFilter();
        } else {

            items = this.noFilter();
        }
        */

        const items = this.context.category
            ? this.itemFilter()
            : this.noFilter();
        //console.log('category isss ', this.context.category)
        return (
            <div className="PantryFilter">
                {items}
                <Link to="/add-pantry-item">
                    <button type="button">
                        + Item
                    </button>
                </Link>
            </div>
        );
    }
}

PantryFilter.defaultProps = {
    categories: [],
    items: []
}

export default PantryFilter;