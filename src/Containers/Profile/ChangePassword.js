import React, { useState } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, message } from "antd";
import TextInput from "../../Components/Form/TextInput";
import { changePassword } from "../Auth/AuthAction";
import { ViewEditCard } from "../../Components/Utils";
function ChangePassword(props) {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const { viewType, toggleViewType } = ViewEditCard()
    const disabled = !newPassword || newPassword !== confirmNewPassword
    const changePasswordCallBack = (status, err) => {
        setCurrentPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
        toggleViewType()
        status === 'success'
            ? message.success('password changed successfully !')
            : message.error(err.response && err.response.data && err.response.data.error)

    }

    const handleChangePassword = () => {
        const { _id } = props.user;
        props.changePassword({ _id, currentPassword, newPassword }, changePasswordCallBack)
    }
    return (
        <>
            {viewType === 'view'
                ? <a onClick={toggleViewType}>Change password</a>
                : <>
                    <TextInput
                        isRequired
                        type='password'
                        name='currentPassword'
                        value={currentPassword}
                        onChange={({ target: { value } }) => setCurrentPassword(value)}
                        placeholder='Current password'
                    />
                    <TextInput
                        isRequired
                        type='password'
                        name='newPassword'
                        value={newPassword}
                        onChange={({ target: { value } }) => setNewPassword(value)}
                        placeholder='New password'
                    />
                    <TextInput
                        isRequired
                        type='password'
                        name='confirmNewPassword'
                        value={confirmNewPassword}
                        onChange={({ target: { value } }) => setConfirmNewPassword(value)}
                        placeholder='Confirm new password'
                    />
                    <Button
                        type='primary'
                        loading={props.changingPassword}
                        disabled={disabled}
                        onClick={handleChangePassword}
                        icon='login'>
                        Change Password</Button>
                    <Button
                        type='danger'
                        onClick={toggleViewType}>
                        Cancel</Button>

                </>}
        </>
    )
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    changingPassword: auth.changingPassword
})

const mapDispatchToProps = dispatch => bindActionCreators({ changePassword }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
