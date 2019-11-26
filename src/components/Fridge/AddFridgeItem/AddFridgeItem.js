import React, { Component } from 'react';
import FridgeContext from '../../../contexts/FridgeContext';
import ValidationError from '../../ValidationError/ValidationError';
import FridgeItemApiService from '../../../services/fridge_item-api-service';
import './AddFridgeItem.css';

class AddFridgeItem extends Component {
    static contextType = FridgeContext;

    constructor(props) {
        super(props);
        this.state = {
            itemName: {
                value: '',
                touched: false
            },
            category: {
                value: 'None',
                touched: true
            },
            expiration: {
                value: '',
                touched: false
            },
            note: ''
        };
    }

    findCategoryId(name) {
        const category = this.context.categories.find(category =>
            category.name === name
        );

        return category.id;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.clearError();
        const { itemName, itemCategory, expirationDate, itemContent } = event.target;
        const newItem = {
            name: itemName.value,
            expiration: expirationDate.value,
            note: itemContent.value,
            categoryid: this.findCategoryId(itemCategory.value)
        };
        FridgeItemApiService.postItem(newItem)
            .then(data => {
                itemName.value = '';
                expirationDate.value = '';
                itemContent.value = '';
                itemCategory.value = '';

                this.context.addItem(data);
                this.context.reset();
                this.props.history.push('/fridge');
            })
            .catch(error => this.context.setError(error));
    }

    updateName(name) {
        this.setState({
            itemName: {
                value: name,
                touched: true
            }
        });
    }

    updateCategory(category) {
        this.setState({
            category: {
                value: category,
                touched: true
            }
        });
    }

    updateExpiration(date) {
        this.setState({
            expiration: {
                value: date,
                touched: true
            }
        });
    }

    updateNote(note) {
        this.setState({ note });
    }

    validateName() {
        const name = this.state.itemName.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }
    }

    validateCategory() {
        const category = this.state.category.value.trim();
        //console.log('new category ', category)
        if (category === 'None') {
            return 'Category is required';
        }
    }

    validateDate() {
        const date = this.state.expiration.value.trim();
        if (date.length === 0) {
            return 'Date is required';
        }
    }

    render() {
        const { error } = this.context;
        const options = this.context.categories
            .map((category, i) =>
                <option key={i} value={category.name}>{category.name}</option>
            )
        return (
            <section className="add-fridge-item-background">
                <div className="AddFridgeItem">
                    <h3>Create an item</h3>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className='alert'>
                            {error && <p className='error'>{error.message}</p>}
                        </div>
                        <label htmlFor="itemName">
                            Name
                        </label>
                        <input
                            name="itemName"
                            id="itemName"
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="validate"
                            onChange={e => this.updateName(e.target.value)}
                            required />
                        {this.state.itemName.touched && (
                            <ValidationError message={this.validateName()} />
                        )}
                        <label htmlFor="itemCategory">
                            Category
                        </label>
                        <select
                            name="itemCategory"
                            id="itemCategory"
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="validate"
                            onChange={e => this.updateCategory(e.target.value)}
                            required>
                            <option value="None">...</option>
                            {options}
                        </select>
                        {this.state.category.touched && (
                            <ValidationError message={this.validateCategory()} />
                        )}
                        <lable htmlFor="expirationDate" id="exp-date">
                            Expiration date
                        </lable>
                        <input type="date"
                            name="expirationDate"
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="validate"
                            onChange={e => this.updateExpiration(e.target.value)}
                            required />
                        {this.state.expiration.touched && (
                            <ValidationError message={this.validateDate()} />
                        )}
                        <label htmlFor="itemContent">
                            Note
                        </label>
                        <textarea
                            id="itemContent"
                            name="itemContent"
                            onChange={e => this.updateNote(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={
                                this.validateDate() ||
                                this.validateName() ||
                                this.validateCategory()
                            }
                        >
                            Add item
                    </button>
                    </form>
                </div>
            </section>
        );
    }
}

AddFridgeItem.defaultProps = {
    categories: []
}

export default AddFridgeItem;