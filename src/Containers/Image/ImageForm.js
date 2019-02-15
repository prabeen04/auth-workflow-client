import React, { useState } from 'react'
import { Button } from "antd";
import { TextInput } from "../../Components/Form";
export default function ImageForm() {
    const [query, setQuery] = useState('')
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <TextInput
                onChange={({ target: { value } }) => setQuery(value)}
                value={query}
                placeholder='Search image ...'
            />
            <Button type='primary'>Search</Button>
         </div>   
        </>
    )
}
