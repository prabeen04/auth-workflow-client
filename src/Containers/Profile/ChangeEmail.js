import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, message } from "antd";
import TextInput from "../../Components/Form/TextInput";
import { ViewEditCard } from "../../Components/Utils";
import { changeEmail } from "../Auth/AuthAction";

class ChangeEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newEmail: '',
        }
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
    changeEmailCallBack = (status) => {
        this.setState({ newEmail: '' })
        status === 'success'
            ? message.success('email sent for verification')
            : message.error('error changing email !')
        this.props.toggleViewType()
    }
    handleChangeEmail = () => {
        const { _id } = this.props.user;
        const { newEmail } = this.state;
        this.props.changeEmail({ _id, email: newEmail }, this.changeEmailCallBack)
    }
    render() {
        const { newEmail } = this.state;
        const { toggleViewType, sendingEmail } = this.props
        return (
            <>
                <TextInput
                    isRequired
                    type='email'
                    name='newEmail'
                    value={newEmail}
                    label='Enter new email'
                    onChange={this.handleChange}
                    placeholder='example@example.com'
                />
                <Button
                    type='primary'
                    loading={sendingEmail}
                    disabled={!newEmail}
                    onClick={this.handleChangeEmail}
                    icon='login'>
                    Change Email</Button>
                <Button
                    type='danger'
                    onClick={toggleViewType}>
                    Cancel</Button>
            </>

        )
    }
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    sendingEmail: auth.sendingEmail,
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeEmail }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);
