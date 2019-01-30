import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { validateEmail } from "./AuthAction";
import Button from "antd/lib/button";

class EmailValidation extends Component {
    constructor(props) {
        super(props)
    }
    handleEmailValidation = () => {
        const { history, match: { params: { token } } } = this.props;
        this.props.validateEmail(token, () => console.log('callback'));
    }
    componentDidMount() {
        this.handleEmailValidation()
    }
    render() {
        return (
             <>
             <h3>Emailvalidation component</h3>
             </>    
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({ validateEmail }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailValidation));