import React, { Component } from 'react';
import './PantryItemMain.css';

class PantryItemMain extends Component {
    displayItem() {
        //console.log("history main ", this.props.history)
        //console.log("props main ", this.props)
        return (
            <>
                <h4>{this.props.item.name}</h4>
                <div className="expiration-date">
                    Expiration date: {this.props.item.expiration_date}
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
        //console.log('props ', this.props.item)
        const item = this.props.item ? this.displayItem() : '';
        //console.log("item ", item)
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