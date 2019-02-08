import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";
import { Button, message } from "antd";
import { logout } from "../Auth/AuthAction";
import { base_url } from "../../Config/config";
import { ViewEditCard } from "../../Components/Utils";
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';

export class Profile extends Component {

  handleLogout = () => {
    this.props.logout(this.callback)
  }
  callback = () => {
    this.props.history.push('/login')
  }

  render() {
    const { user: { email, userName, avatar } } = this.props;
    const avatarUrl = avatar && avatar.includes('googleusercontent.com') ? avatar : `${base_url}/image/${avatar}`
    return (
      <>
        <img src={avatarUrl} alt="" style={{ width: 100, height: 100, borderRadius: '50%' }} />
        <h3>{`Welcome ${userName}`}</h3>
        <h2>{email}</h2>
        
        <ViewEditCard>
          {({ viewType }, toggleViewType) => (
            viewType === 'view'
              ? <a onClick={() => toggleViewType()}>Change email</a>
              : <ChangeEmail toggleViewType={toggleViewType} />
          )}
        </ViewEditCard>
        <br />
        {/* <ViewEditCard>
          {({ viewType }, toggleViewType) => (
            viewType === 'view'
              ? <a onClick={() => toggleViewType()}>Change password</a>
              : <ChangePassword toggleViewType={toggleViewType} />
          )}
        </ViewEditCard> */}
        <br/>
        <Button type='danger' onClick={this.handleLogout}>Logout</Button>
      </>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
