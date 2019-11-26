import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FridgeItemApiService from '../../../services/fridge_item-api-service';
import FridgeContext from '../../../contexts/FridgeContext';
import './FridgeItemMain.css';

class FridgeItemMain extends Component {
    static contextType = FridgeContext;

    deleteItem(itemId, cb) {
        this.context.clearError();

        FridgeItemApiService.deleteItem(itemId)
            .then(() => {
                cb(itemId);
                this.props.history.push('/fridge');
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
                        <Link to={`/fridge/edit-fridge-item/${this.context.item.id}`}>
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
            <section className="fridge-main">
                <div className="FridgeItemMain wrapper">
                    {item}
                </div>
            </section>
        );

    }
}

FridgeItemMain.defaultProps = {
    item: {}
}

export default withRouter(FridgeItemMain);