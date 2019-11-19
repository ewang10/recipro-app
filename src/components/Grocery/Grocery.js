import React, {Component} from 'react';
import GroceryItem from './GroceryItem/GroceryItem';
import './Grocery.css';

class Grocery extends Component {
    grocery = [
        {
            id: 1,
            name: "potato"
        }, {
            id: 2,
            name: "onion"
        }, {
            id: 3,
            name: "carrots"
        }
    ];
    render() {
        const items = this.grocery.map((item, i) => 
            <GroceryItem item={item} key={i}/>
        )
        return (
            <div className="Grocery">
                {items}
            </div>
        );
    }
}

export default Grocery;