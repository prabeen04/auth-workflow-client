import React, { Component, useState } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, message } from "antd";
import TextInput from "../../Components/Form/TextInput";
import { changeEmail } from "../Auth/AuthAction";

function ChangeEmail(props) {
    const [newEmail, setNewEmail] = useState('')
    const changeEmailCallBack = (status) => {
        setNewEmail('')
        status === 'success'
            ? message.success('email sent for verification')
            : message.error('error changing email !')
        props.toggleViewType()
    }
    const handleChangeEmail = () => {
        const { _id } = props.user;
        props.changeEmail({ _id, email: newEmail }, changeEmailCallBack)
    }
    return (
        <>
            <TextInput
                isRequired
                type='email'
                name='newEmail'
                value={newEmail}
                label='Enter new email'
                onChange={({ target: { value } }) => setNewEmail(value)}
                placeholder='example@example.com'
            />
            <Button
                type='primary'
                loading={props.sendingEmail}
                disabled={!newEmail}
                onClick={handleChangeEmail}
                icon='login'>
                Change Email</Button>
            <Button
                type='danger'
                onClick={props.toggleViewType}>
                Cancel</Button>
        </>
    )
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    sendingEmail: auth.sendingEmail,
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeEmail }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);
