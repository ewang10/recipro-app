import React, { Component } from 'react';
import FridgeItem from '../FridgeItem/FridgeItem';
import './FridgeItemMain.css';

class FridgeItemMain extends Component {
    displayItem() {
        console.log("displaying item...")
        return (
            <>
                <FridgeItem
                    item={this.props.item}
                />
                <div className="expiration-date">
                    {this.props.item.expiration_date}
                </div>
                <section className="note">
                    <div className="note-content">
                        {this.props.item.note}
                    </div>
                    <div className="note-controller">
                        <button type="button">Update</button>
                        <button type="button">Delete</button>
                    </div>
                </section>
            </>
        );
    }
    render() {
        console.log('props ', this.props.item)
        const item = this.props.item ? this.displayItem() : '';
        console.log("item ", item)
        return (
            <div className="FridgeItemMain wrapper">
                {item}
            </div>
        );

    }
}

FridgeItemMain.defaultProps = {
    item: {
        id: 1,
        name: "cheese",
        category_id: 1,
        modified: new Date(),
        expiration_date: new Date(),
        note: "some note..."
    }
}

export default FridgeItemMain;