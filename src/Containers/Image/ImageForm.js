import React, { useState } from 'react'
import { Button } from "antd";
import { TextInput } from "../../Components/Form";

export default function ImageForm({ onChange, value }) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    onChange={onChange}
                    value={value}
                    placeholder='Search image ...'
                />
                <Button type='primary'>Search</Button>
            </div>
        </>
    )
}
