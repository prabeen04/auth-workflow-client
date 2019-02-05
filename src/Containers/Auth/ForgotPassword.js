import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, message } from "antd";
import { forgotPassword } from "./AuthAction";
import TextInput from "../../Components/Form/TextInput";

class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.forgotPassword(this.state.email, (msg) => console.log(msg))
    }

    render() {
        const {forgotPassword } = this.props
        const { email } = this.state;
        return (
            <>
                <h3 className='title'>Forgot password</h3>
                <form onSubmit={this.handleSubmit} method='post'>
                    <TextInput
                        isRequired
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        placeholder='example@example.com'
                        label='Enter registered email'
                    />
                    <Button
                        type='primary'
                        htmlType='submit'
                        loading={forgotPassword}
                        disabled={!email}
                        icon='login'>
                        Reset password</Button>
                </form>
                <br />
                <Link to='/login' style={{ textAlign: 'center' }}>Back to login</Link>
            </>
        )
    }
}
const mapStateToProps = ({ auth }) => ({
    forgotPassword: auth.forgotPassword,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    forgotPassword
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPassword));