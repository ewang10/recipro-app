import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './PantryItem.css';


class PantryItem extends Component {
    render() {
        const { item } = this.props;
        console.log(item.length)
        if (item.length) {
            return (
                <div className="PantryItem">
                    <h4>
                        <Link to={`/pantry-item/${item.id}`}>
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
        } else {
            return <></>
        }
        
    }
}

PantryItem.defaultProps = {
    item: {}
}

export default PantryItem;