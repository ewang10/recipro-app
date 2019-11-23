import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { format } from 'date-fns';
import FridgeItemApiService from '../../../services/fridge_item-api-service';
import FridgeContext from '../../../contexts/FridgeContext';
import './FridgeItem.css';


class FridgeItem extends Component {
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

    render() {
        const { item } = this.props;
        return (
            <div className="FridgeItem">
                <h4
                    onClick={() => this.context.updateItem(item)}
                >
                    <Link to={`/fridge-item/${item.id}`}>
                        {item.name}
                    </Link>
                </h4>
                <div className="controller">
                    <div className="item-modified-date">
                        Modified {format(new Date(item.modified), 'do MMM yyyy')}
                    </div>
                    <button 
                        type="button"
                        onClick={() =>
                            this.deleteItem(
                                item.id,
                                this.context.deleteItem
                            )
                        }
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
        
    }
}

FridgeItem.defaultProps = {
    item: {}
}

export default withRouter(FridgeItem);