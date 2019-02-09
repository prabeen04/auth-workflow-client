import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, message } from "antd";
import { setPassword } from "./AuthAction";
import TextInput from "../../Components/Form/TextInput";

class SetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPassword: '',
            confirmNewPassword: '',
        }
    }
    setPasswordCallBack = (status, res) => {
        if (status === 'success') {
            message.success('password is set successfully !')
            this.props.history.push('/login')
        } else {
            message.error(res.response && res.response.data && res.response.data.error)
            this.props.history.push('/login')
        }
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
    handleSubmit = (e) => {
        const { setPassword, location: { state: { id } } } = this.props
        const { newPassword } = this.state;
        e.preventDefault()
        setPassword(newPassword, id, this.setPasswordCallBack)
    }

    render() {
        const { settingPassword, settingPasswordError } = this.props
        const { newPassword, confirmNewPassword } = this.state;
        const disabled = !newPassword || newPassword !== confirmNewPassword
        return (
            <>
                <div className='container'>
                    <h3 className='title'>Forgot password</h3>
                    <form onSubmit={this.handleSubmit} method='post'>
                        <TextInput
                            isRequired
                            type='password'
                            name='newPassword'
                            value={newPassword}
                            onChange={this.handleChange}
                            placeholder='******'
                            label='New password'
                        />
                        <TextInput
                            isRequired
                            type='password'
                            name='confirmNewPassword'
                            value={confirmNewPassword}
                            onChange={this.handleChange}
                            placeholder='******'
                            label='Confirm new password'
                        />
                        <Button
                            type='primary'
                            htmlType='submit'
                            loading={settingPassword}
                            disabled={disabled}
                            icon='login'>
                            Set password</Button>
                    </form>
                    <br />
                    <Link to='/login' style={{ textAlign: 'center' }}>Back to login</Link>
                </div>
            </>
        )
    }
}
const mapStateToProps = ({ auth }) => ({
    settingPassword: auth.settingPassword,
    settingPasswordError: auth.settingPasswordError,
});
const mapDispatchToProps = dispatch => bindActionCreators({ setPassword }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetPassword));