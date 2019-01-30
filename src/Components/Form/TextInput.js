import React from "react";
import { Input } from "antd";

const TextInput = ({ type, name, value, placeholder, label, onChange, isRequired, errorMessage, ...rest }) => {
    return (
        <div className='input-wrapper'>
            {label && <label className='input-label'>{label}</label>}
            <Input
                type={type || 'text'}
                name={name}
                value={value}
                required={isRequired}
                onChange={onChange}
                placeholder={placeholder}
            />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
    )
};
export default TextInput;