import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PantryItemApiService from '../../../services/pantry_item-api-service';
import PantryContext from '../../../contexts/PantryContext';
import './PantryItemMain.css';

class PantryItemMain extends Component {
    static contextType = PantryContext;

    deleteItem(itemId, cb) {
        this.context.clearError();

        PantryItemApiService.deleteItem(itemId)
            .then(() => {
                cb(itemId);
                this.props.history.push('/pantry');
            })
            .catch(error => this.context.setError(error));
    }

    displayItem() {
        return (
            <>
                <h4>{this.context.item.name}</h4>
                <div className="expiration-date">
                    Expiration date: {this.context.item.expiration}
                </div>
                <section className="note">
                    <div className="note-content">
                        {this.context.item.note}
                    </div>
                    <div className="note-controller">
                        <Link to={`/edit-pantry-item/${this.context.item.id}`}>
                            <button type="button">Update</button>
                        </Link>
                        <button
                            type="button"
                            onClick={() =>
                                this.deleteItem(
                                    this.context.item.id,
                                    this.context.deleteItem
                                )
                            }
                        >
                            Delete
                        </button>
                    </div>
                </section>
            </>
        );
    }
    render() {
        const item = this.context.item ? this.displayItem() : '';
        return (
            <div className="PantryItemMain wrapper">
                {item}
            </div>
        );

    }
}

PantryItemMain.defaultProps = {
    item: {
        id: 1,
        name: "cheese",
        category_id: 1,
        modified: new Date(),
        expiration_date: "2017-11-1",
        note: "some note..."
    }
}

export default PantryItemMain;