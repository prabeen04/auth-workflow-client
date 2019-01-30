import React, { Component } from 'react'
import { Button } from "antd";
import TextInput from "../../Components/Form/TextInput";
function ChangePassword({ toggleViewType, newEmail, handleChange, handleChangeEmail }) {
    return (
        <>
            <TextInput
                isRequired
                type='email'
                name='newEmail'
                value={newEmail}
                label='Enter new email'
                onChange={handleChange}
                placeholder='example@example.com'
            />
            <Button
                type='primary'
                // loading={logging}
                disabled={!newEmail}
                onClick={() => {
                    handleChangeEmail()
                    toggleViewType()
                }
                }
                icon='login'>
                Change Email</Button>
            <Button
                type='danger'
                onClick={toggleViewType}>
                Cancel</Button>
        </>
    )
}
export default ChangePassword;
