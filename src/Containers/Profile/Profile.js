import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";
import { logout, changePassword, changeEmail } from "../Auth/AuthAction";
import { Button } from "antd";
import axios from 'axios';
import { TextInput } from "../../Components/Form";
import { base_url } from "../../Config/config";
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';
import { ViewEditCard } from '../../Components/Utils';

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newEmail: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    }
  }
  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
  handleLogout = () => {
    this.props.logout(this.callback)
  }
  callback = () => {
    this.props.history.push('/login')
  }

  handleChangePassword = () => {
    console.log('changePassword called')
    const { _id } = this.props.user;
    const { currentPassword, newPassword } = this.state;
    this.props.changePassword({ _id, currentPassword, newPassword })
  }
  handleChangeEmail = () => {
    console.log('handleChangeEmail called')
    const { _id } = this.props.user;
    const { newEmail } = this.state;
    this.props.changeEmail({ _id, email: newEmail })
  }
  render() {
    const { user: { email, userName, avatar } } = this.props;
    const { newEmail, currentPassword, newPassword, confirmNewPassword, isChangePassword, isChangeEmail } = this.state;
    const disabled = !newPassword || newPassword !== confirmNewPassword
    const avatarUrl = avatar.includes('googleusercontent.com') ? avatar : `${base_url}/image/${avatar}`
    return (
      <>
        <img src={avatarUrl} alt="" style={{ width: 100, height: 100, borderRadius: '50%' }} />
        <h3>{`Welcome ${userName}`}</h3>
        <p>{email}</p>
        <ViewEditCard>
          {({ viewType }, toggleViewType) => (
            viewType === 'view'
              ? <a onClick={() => toggleViewType()}>change email</a>
              :
              <ChangeEmail
                newEmail={newEmail}
                handleChange={this.handleChange}
                handleChangeEmail={this.handleChangeEmail}
                toggleViewType={toggleViewType}

              />
          )}
        </ViewEditCard>
        <br />
        <ViewEditCard>
          {({ viewType }, toggleViewType) => (
            viewType === 'view'
              ? <a onClick={() => toggleViewType()}>change password</a>
              :
              <ChangePassword
                currentPassword={currentPassword}
                newPassword={newPassword}
                confirmNewPassword={confirmNewPassword}
                handleChange={this.handleChange}
                handleChangePassword={this.handleChangePassword}
                toggleViewType={toggleViewType}

              />
          )}
        </ViewEditCard>
        <br />
        <button onClick={this.handleLogout}>Logout</button>
      </>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ logout, changePassword, changeEmail }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
