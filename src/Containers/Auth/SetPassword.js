import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, message } from "antd";
import { } from "./AuthAction";
import TextInput from "../../Components/Form/TextInput";

class SetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPassword: '',
            confirmNewPassword: '',
        }
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { } = this.props
        const { newPassword, confirmNewPassword } = this.state;
        const disabled = !newPassword || newPassword !== confirmNewPassword
        return (
            <>
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
                        loading={false}
                        disabled={disabled}
                        icon='login'>
                        Set password</Button>
                </form>
                <br />
                <Link to='/login' style={{ textAlign: 'center' }}>Back to login</Link>
            </>
        )
    }
}
const mapStateToProps = ({ auth }) => ({

});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetPassword));