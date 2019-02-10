import React, { Component, useState } from 'react'

function ViewEditCard() {
    const [viewType, setViewType] = useState('view');
    const toggleViewType = () => {
            if (viewType === 'view') {
                setViewType('edit')
            } else {
                setViewType('view')
            }
    }

    return { viewType, toggleViewType }
}

// class ViewEditCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             viewType: 'view',
//         };
//     }
// toggleViewType = () => {
//     this.setState(prevState => {
//         if (prevState.viewType === 'view') {
//             return { viewType: 'edit' }
//         } else {
//             return { viewType: 'view' }
//         }
//     })
// }
//     render() {
//         return (
//             <>
//                 {this.props.children(this.state, this.toggleViewType )}
//             </>
//         );
//     }
// }

export default ViewEditCard;