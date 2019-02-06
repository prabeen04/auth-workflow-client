import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { validateResetPasswordLink } from "./AuthAction";
import { message } from "antd";

class ResetPasswordLink extends Component {
    validateResetPasswordLinkCallBack = (status, err) => {
        if (status === 'success') {
            message.success('password link veryfied successfully !')
            this.props.history.push('/setPassword')
        } else {
            message.error(err.response && err.response.data && err.response.data.error)
            this.props.history.push('/')
        }
    }
    componentDidMount() {
        console.log('inside ResetPasswordLink cDM')
        const { validateResetPasswordLink, match: { params: { token } } } = this.props;
        validateResetPasswordLink(token, this.validateResetPasswordLinkCallBack);
    }
    render() {
        const { validatingResetPasswordLink, validatingResetPasswordLinkError } = this.props;
        if (validatingResetPasswordLink) return <p>Validating email ...</p>
        if (validatingResetPasswordLinkError) return <p>Error while validating email ...</p>
        return (
            <>
                <Link to='/'>Home</Link>
            </>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    validatingResetPasswordLink: auth.validatingResetPasswordLink,
    validatingResetPasswordLinkError: auth.validatingResetPasswordLinkError,
})

const mapDispatchToProps = dispatch => bindActionCreators({ validateResetPasswordLink }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordLink));