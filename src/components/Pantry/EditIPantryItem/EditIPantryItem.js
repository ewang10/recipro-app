import React, { Component } from 'react';
import PantryItemApiService from '../../../services/pantry_item-api-service';
import PantryContext from '../../../contexts/PantryContext';
import ValidationError from '../../ValidationError/ValidationError';
import '../AddPantryItem/AddPantryItem.css';

class EditPantryItem extends Component {
    static contextType = PantryContext;
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

    componentDidMount() {
        const itemId = this.context.item.id;
        //console.log('item id isss ', itemId)
        this.context.clearError();
        PantryItemApiService.getItem(itemId)
            .then(res => {
                this.setState({
                    itemName: {
                        value: res.name
                    },
                    category: {
                        value: this.context.categories.find(
                            category => category.id === res.categoryid
                        ).name
                    },
                    expiration: {
                        value: res.expiration
                    },
                    note: res.note
                });
            })
            .catch(error => this.context.setError(error));
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
        const itemId = this.context.item.id;
        const { itemName, itemCategory, expirationDate, itemContent } = event.target;
        const updateItem = {
            name: itemName.value,
            expiration: expirationDate.value,
            note: itemContent.value,
            categoryid: this.findCategoryId(itemCategory.value)
        };
        PantryItemApiService.patchItem(itemId, updateItem)
            .then(data => {
                this.context.patchItem(itemId, updateItem);
                this.props.history.push('/pantry');
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
        const { itemName, category, expiration, note } = this.state;
        console.log('updated category ', category)
        const options = this.context.categories
            .map((category, i) =>
                <option key={i} value={category.name}>{category.name}</option>
            )
        return (
            <div className="AddPantryItem">
                <h3>Update item</h3>
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
                        value={itemName.value}
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
                        <option value={category.value}>{category.value}</option>
                        {options}
                    </select>
                    {this.state.category.touched && (
                        <ValidationError message={this.validateCategory()} />
                    )}
                    <lable htmlFor="expirationDate">
                        Expiration date
                    </lable>
                    <input
                        type="date"
                        name="expirationDate"
                        value={expiration.value}
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
                        value={note}
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
                        Update item
                    </button>
                </form>
            </div>
        );
    }
}

export default EditPantryItem;