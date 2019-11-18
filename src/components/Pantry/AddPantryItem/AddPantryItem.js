import React, { Component } from 'react';
import './AddPantryItem.css';

class AddPantryItem extends Component {
    render() {
        const options = this.props.categories
            .map((category, i) =>
                <option key={i} value={category.name}>{category.name}</option>
            )
        return (
            <div className="AddPantryItem">
                <h3>Create an item</h3>
                <form>
                    <label htmlFor="itemName">
                        Name
                    </label>
                    <input
                        name="itemName"
                        id="itemName"
                        aria-required="true"
                        required />
                    <label htmlFor="itemCategory">
                        Category: 
                    </label>
                    <select
                        name="itemCategory"
                        id="itemCategory"
                        aria-required="true"
                        required>
                        <option value="None">...</option>
                        {options}
                    </select>
                    <lable htmlFor="expiration-date">
                        Expiration date:
                    </lable>
                    <input type="date" required />
                    <label htmlFor="item-content">
                        Note
                    </label>
                    <textarea
                        id="item-content"
                        name="item-content"
                        aria-required="true"
                    />
                    <button type="submit">
                        Add item
                    </button>
                </form>
            </div>
        );
    }
}

AddPantryItem.defaultProps = {
    categories: []
}

export default AddPantryItem;