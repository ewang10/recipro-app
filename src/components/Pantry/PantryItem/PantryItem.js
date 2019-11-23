import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import PantryItemApiService from '../../../services/pantry_item-api-service';
import PantryContext from '../../../contexts/PantryContext';
import './PantryItem.css';


class PantryItem extends Component {
    static contextType = PantryContext;

    deleteItem(itemId, cb) {
        this.context.clearError();

        PantryItemApiService.deleteItem(itemId)
            .then(() => {
                cb(itemId);
                this.props.history.push('/pantry');
                //window.location.reload(false);
            })
            .catch(error => this.context.setError(error));
    }

    render() {
        const { item } = this.props;
        //console.log('item iss ', item);
        return (
            <div
                className="PantryItem"
            >
                <h4
                    onClick={() => this.context.updateItem(item)}
                >
                    <Link to={`/pantry-item/${item.id}`}>
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

PantryItem.defaultProps = {
    item: {}
}

export default PantryItem;