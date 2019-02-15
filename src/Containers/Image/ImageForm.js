import React, { useState, createContext } from 'react'
import { Button } from "antd";
import { TextInput } from "../../Components/Form";
export const QueryContext = createContext('')

export default function ImageForm() {
    const [query, setQuery] = useState('')
    return (
        <>
            <QueryContext.Provider value={query}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        onChange={({ target: { value } }) => setQuery(value)}
                        value={query}
                        placeholder='Search image ...'
                    />
                    <Button type='primary'>Search</Button>
                </div>
            </QueryContext.Provider>
        </>
    )
}
