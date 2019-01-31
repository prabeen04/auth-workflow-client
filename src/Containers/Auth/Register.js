import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, message } from "antd";
import { register } from "./AuthAction";
import { TextInput, Upload } from "../../Components/Form";
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'John Doe',
            email: 'demo@democompany.com',
            password: '123456',
            confirmPassword: '123456',
            avatar: null,
        }
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
    handleFileChange = ({ target: { files } }) => this.setState({ avatar: files[0] })
    setAvatar = (avatar) => this.setState({ avatar })
    callBack = (status, err) => {
        if (status === 'success') {
            message.success('you have successfully Registered !')
            this.props.history.push('/login')
        } else {
            message.error(err.response && err.response.data && err.response.data.error)
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.register(this.state, this.callBack)
    }
    render() {
        const { registering } = this.props
        const { userName, email, password, confirmPassword, image } = this.state;
        const disabled = !email || !password || password !== confirmPassword
        return (
            <>
                <h3 className='title'>Register</h3>
                <form onSubmit={this.handleSubmit} method='post'>
                    <div className='flex-container horizontally-center' style={{ flexDirection: 'column' }}>
                        <TextInput
                            name='userName'
                            value={userName}
                            onChange={this.handleChange}
                            placeholder='John'
                            label='First name'
                        />
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
                        <TextInput
                            isRequired
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            placeholder='******'
                            label='Confirm password'
                        />
                        {/* <input
                            type='file'
                            name='avatar'
                            onChange={this.handleFileChange}
                        /> */}
                        <Upload setAvatar={this.setAvatar} />
                        <Button
                            type='primary'
                            htmlType='submit'
                            loading={registering}
                            disabled={disabled}
                            icon='login'>
                            Register</Button>
                    </div>
                </form>
                <Link to='/login' style={{ textAlign: 'center' }}>Already have an account? Login</Link>
            </>
        )
    }
}
const mapStateToProps = ({ auth }) => ({
    registering: auth.registering,
    registeringError: auth.registeringError,
    registeringSuccess: auth.registeringSuccess
});
const mapDispatchToProps = dispatch => bindActionCreators({ register }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));