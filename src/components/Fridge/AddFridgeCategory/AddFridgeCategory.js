import React, { Component } from 'react';
import FridgeCategoryApiService from '../../../services/fridge_category-api-service';
import FridgeContext from '../../../contexts/FridgeContext';
import ValidationError from '../../ValidationError/ValidationError';
import './AddFridgeCategory.css';

class AddFridgeCategory extends Component {
    static contextType = FridgeContext;

    constructor(props) {
        super(props);
        this.state = {
            categoryName: {
                value: '',
                touched: false
            }
        };
    }

    updateCategoryName(name) {
        this.setState({
            categoryName: {
                value: name,
                touched: true
            }
        });
    }

    validateCategoryName() {
        const name = this.state.categoryName.value.trim();
        const match = this.context.categories.find(category =>
            category.name === this.state.categoryName.value
        );

        if (name.length === 0) {
            return 'Name is required';
        } else if (match) {
            return 'Name must be unique';
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.clearError();

        const { categoryName } = event.target;

        const category = {
            name: categoryName.value
        };

        FridgeCategoryApiService.postCategory(category)
            .then(data => {
                categoryName.value = '';
                this.context.addCategory(data);
                this.props.history.push('/fridge');
            })
            .catch(error => this.context.setError(error));
    }

    render() {
        const { error } = this.context;
        return (
            <section className="add-fridge-category-background">
                <div className="AddFridgeCategory">
                    <h3>Create a category</h3>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div className='alert'>
                            {error && <p className='error'>{error.message}</p>}
                        </div>
                        <label htmlFor="categoryName">
                            Name
                        </label>
                        <input
                            type="text"
                            name="categoryName"
                            id="categoryName"
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="validate"
                            onChange={e => this.updateCategoryName(e.target.value)}
                            required />
                        {this.state.categoryName.touched && (
                            <ValidationError message={this.validateCategoryName()} />
                        )}
                        <button
                            type="submit"
                            disabled={this.validateCategoryName()}
                        >
                            Add category
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default AddFridgeCategory;