import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { validateEmail } from "./AuthAction";
import { Button, message } from "antd";

class EmailValidation extends Component {
    constructor(props) {
        super(props)
    }
    emailValidationCallBack = (status, err) => {
        console.log(err.response)
        if (status === 'success') {
            message.success('email changed successfully !')
            this.props.history.push('/')
        } else {
            message.error(err.response && err.response.data && err.response.data.error)
            this.props.history.push('/')
        }
    }
    // handleEmailValidation = () => {
    //     const { history, match: { params: { token } } } = this.props;
    //     this.props.validateEmail(token, this.handleEmailValidation);
    // }
    componentDidMount() {
        console.log('inside cDM')
        const { history, validateEmail, match: { params: { token } } } = this.props;
        validateEmail(token, this.emailValidationCallBack);
    }
    render() {
        const { validatingEmail, validatingEmailError } = this.props;
        if (validatingEmail) return <p>Validating email ...</p>
        if (validatingEmailError) return <p>Error while validating email ...</p>
        return (
            <>
                <Link to='/'>Home</Link>
            </>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    validatingEmail: auth.validatingEmail
})

const mapDispatchToProps = dispatch => bindActionCreators({ validateEmail }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailValidation));