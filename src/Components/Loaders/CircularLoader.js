import React from 'react'
import { Icon } from "antd";
export default function CircularLoader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon type='user' spin />
        </div>
    )
}
