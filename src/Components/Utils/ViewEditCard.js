import React, { useState } from 'react'
function ViewEditCard() {
    const [viewType, setViewType] = useState('view')
    function toggleViewType() {
        viewType === 'view'
            ? setViewType('edit')
            : setViewType('view')
    }

    return { viewType, toggleViewType }
}
export default ViewEditCard;
// class ViewEditCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             viewType: 'view',
//         };
//     }
//     toggleViewType = () => {
//         this.setState(prevState => {
//             if (prevState.viewType === 'view') {
//                 return { viewType: 'edit' }
//             } else {
//                 return { viewType: 'view' }
//             }
//         })
//     }
//     render() {
//         return (
//             <>
//                 {this.props.children(this.state, this.toggleViewType )}
//             </>
//         );
//     }
// }

// export default ViewEditCard;