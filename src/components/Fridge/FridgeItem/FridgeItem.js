import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './FridgeItem.css';


class FridgeItem extends Component {
    render() {
        const { item } = this.props;
        console.log(item.length)
        return (
            <div className="FridgeItem">
                <h4>
                    <Link to={`/fridge-item/${item.id}`}>
                        {item.name}
                    </Link>
                </h4>
                <div className="controller">
                    <div className="item-modified-date">
                        Modified {format(new Date(item.modified), 'do MMM yyyy')}
                    </div>
                    <button type="button">
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

export default FridgeItem;