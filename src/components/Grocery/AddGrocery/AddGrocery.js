import React, { Component } from 'react';
import GroceryContext from '../../../contexts/GroceryContext';
import GroceryApiService from '../../../services/grocery-api-service';
import ValidationError from '../../ValidationError/ValidationError';
import './AddGrocery.css';

class AddGrocery extends Component {
    static contextType = GroceryContext;
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            }
        };
    }

    updateName(name) {
        this.setState({
            name: {
                value: name,
                touched: true
            }
        });
    }

    validateName() {
        const name = this.state.name.value.trim();

        if (name.length === 0) {
            return 'Name is required';
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.clearError();

        const { groceryName } = event.target;

        const grocery = {
            name: groceryName.value
        };

        GroceryApiService.postGrocery(grocery)
            .then(data => {
                groceryName.value = '';
                this.context.addGrocery(data);
                this.props.history.push('/grocery');
            })
            .catch(error => this.context.setError(error));
    }

    render() {
        const { error } = this.context;
        return (
            <section className="add-grocery-background">
                <div className="AddGrocery">
                    <h3>Create a Grocery</h3>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div className='alert'>
                            {error && <p className='error'>{error.message}</p>}
                        </div>
                        <label htmlFor="groceryName">
                            Name
                    </label>
                        <input
                            type="text"
                            name="groceryName"
                            id="groceryName"
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="validate"
                            onChange={e => this.updateName(e.target.value)}
                            required />
                        {this.state.name.touched && (
                            <ValidationError message={this.validateName()} />
                        )}
                        <button
                            type="submit"
                            disabled={this.validateName()}
                        >
                            Add grocery
                    </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default AddGrocery;