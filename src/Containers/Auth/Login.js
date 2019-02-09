import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, message } from "antd";
import { GoogleLogin } from "react-google-login";
import { login, googleLogin } from "./AuthAction";
import TextInput from "../../Components/Form/TextInput";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state, this.callBack)
        this.setState({ email: '', password: '' })
    }
    callBack = (status, err) => {
        if (status === 'success') {
            message.success('you have successfully loggedIn !')
            this.props.history.push('/')
        } else {
            message.error(err.response && err.response.data && err.response.data.error)
        }
    }
    handleGoogleLoginFailure = (response) => {
        console.log(response)
        message.error('Error while logging')
    }
    loginWithGoogle = (response) => {
        console.log(response)
        const { email, imageUrl, name } = response.profileObj;
        this.props.googleLogin({ userName: name, email, avatar: imageUrl }, this.callBack)
    }
    render() {
        const { logging } = this.props
        const { email, password } = this.state;
        const disabled = !email || !password
        return (
            <>
                <div className='container'>

                    <h3 className='title'>Login</h3>
                    <form onSubmit={this.handleSubmit} method='post'>
                        <TextInput
                            isRequired
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            placeholder='example@example.com'
                            label='Email'
                        />
                        <TextInput
                            isRequired
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            placeholder='******'
                            label='Password'
                        />
                        <Button
                            type='primary'
                            htmlType='submit'
                            loading={logging}
                            disabled={disabled}
                            icon='login'>
                            Login</Button>
                    </form>
                    <GoogleLogin
                        clientId="553440503285-rgciog1jtcen74j5hq1ojul6o4b93erh.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.loginWithGoogle}
                        onFailure={this.handleGoogleLoginFailure}
                    />
                    <br />
                    <Link to='/register' style={{ textAlign: 'center' }}>Don't have an account? Register </Link> |
                <Link to='/forgotPassword' style={{ textAlign: 'center' }}> Forgot password?</Link>
                </div>
            </>
        )
    }
}
const mapStateToProps = ({ auth }) => ({
    logging: auth.logging,
    loginError: auth.loginError
});
const mapDispatchToProps = dispatch => bindActionCreators({ login, googleLogin }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));