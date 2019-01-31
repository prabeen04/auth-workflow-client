import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, message } from "antd";
import TextInput from "../../Components/Form/TextInput";
import { ViewEditCard } from "../../Components/Utils";
import { changePassword } from "../Auth/AuthAction";

class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        }
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
    changePasswordCallBack = ( status, err) => {
        status === 'success'
            ? message.success('password changed successfully !')
            : message.error(err.response && err.response.data && err.response.data.error)
    }

    handleChangePassword = () => {
        console.log('changePassword called')
        const { _id } = this.props.user;
        const { currentPassword, newPassword } = this.state;
        this.props.changePassword({ _id, currentPassword, newPassword }, this.changePasswordCallBack)
    }
    render() {
        const { currentPassword, newPassword, confirmNewPassword } = this.state;

        const disabled = !newPassword || newPassword !== confirmNewPassword
        return (
            <>
                <ViewEditCard>
                    {({ viewType }, toggleViewType) => (
                        viewType === 'view'
                            ? <a onClick={() => toggleViewType()}>change password</a>
                            :
                            <>
                                <TextInput
                                    isRequired
                                    type='password'
                                    name='currentPassword'
                                    value={currentPassword}
                                    onChange={this.handleChange}
                                    placeholder='Current password'
                                />
                                <TextInput
                                    isRequired
                                    type='password'
                                    name='newPassword'
                                    value={newPassword}
                                    onChange={this.handleChange}
                                    placeholder='New password'
                                />
                                <TextInput
                                    isRequired
                                    type='password'
                                    name='confirmNewPassword'
                                    value={confirmNewPassword}
                                    onChange={this.handleChange}
                                    placeholder='Confirm new password'
                                />
                                <Button
                                    type='primary'
                                    // loading={logging}
                                    disabled={disabled}
                                    onClick={() => {
                                        this.handleChangePassword(toggleViewType)
                                        // toggleViewType()
                                    }
                                    }
                                    icon='login'>
                                    Change Password</Button>
                                <Button
                                    type='danger'
                                    onClick={toggleViewType}>
                                    Cancel</Button>
                            </>
                    )}
                </ViewEditCard>
            </>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ changePassword }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
