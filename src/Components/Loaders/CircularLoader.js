import React from 'react'
import { Icon } from "antd";

export default function CircularLoader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon type='loading' spin  style={{padding: 10, fontSize: 28}}/>
        </div>
    )
}
