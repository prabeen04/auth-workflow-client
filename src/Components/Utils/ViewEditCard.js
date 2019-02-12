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

export default ViewEditCard;