import React, { Component } from 'react'

class ViewEditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewType: 'view',
        };
    }
    toggleViewType = () => {
        this.setState(prevState => {
            if (prevState.viewType === 'view') {
                return { viewType: 'edit' }
            } else {
                return { viewType: 'view' }
            }
        })
    }
    render() {
        return (
            <>
                {this.props.children(this.state, this.toggleViewType )}
            </>
        );
    }
}

export default ViewEditCard;