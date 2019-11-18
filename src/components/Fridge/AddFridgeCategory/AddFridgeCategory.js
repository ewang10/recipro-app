import React, {Component} from 'react';
import './AddFridgeCategory.css';

class AddFridgeCategory extends Component {
    render() {
        return (
            <div className="AddFridgeCategory">
            <h3>Create a category</h3>
            <form>
                <label htmlFor="categoryName">
                    Name
                </label>
                <input 
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    aria-required="true"
                required/>
                <button type="submit">
                    Add category
                </button>
            </form>
        </div>
        );
    }
}

export default AddFridgeCategory;