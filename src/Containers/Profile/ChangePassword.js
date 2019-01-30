import React, { Component } from 'react'
import { Button } from "antd";
import TextInput from "../../Components/Form/TextInput";
function ChangePassword({ currentPassword, newPassword, confirmNewPassword, isChangePassword,
    toggleViewType, handleChange, handleChangePassword }) {
    const disabled = !newPassword || newPassword !== confirmNewPassword
    return (
        <>
            <TextInput
                isRequired
                type='password'
                name='currentPassword'
                value={currentPassword}
                onChange={handleChange}
                placeholder='Current password'
            />
            <TextInput
                isRequired
                type='password'
                name='newPassword'
                value={newPassword}
                onChange={handleChange}
                placeholder='New password'
            />
            <TextInput
                isRequired
                type='password'
                name='confirmNewPassword'
                value={confirmNewPassword}
                onChange={handleChange}
                placeholder='Confirm new password'
            />
            <Button
                type='primary'
                // loading={logging}
                disabled={disabled}
                onClick={() => {
                    handleChangePassword()
                    toggleViewType()
                }
                }
                icon='login'>
                Change Password</Button>
            <Button
                type='danger'
                onClick={toggleViewType}>
                Cancel</Button>
        </>
    )
}

export default ChangePassword;
