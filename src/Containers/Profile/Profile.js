import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";
import { Button, message } from 'antd';
import { logout } from "../Auth/AuthAction";
import { base_url } from "../../Config/config";
import { ViewEditCard } from "../../Components/Utils";
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';

function Profile(props) {
  const { user: { email, userName, avatar } } = props;
  const avatarUrl = avatar && avatar.includes('googleusercontent.com') ? avatar : `${base_url}/image/${avatar}`;
  const { viewType, toggleViewType } = ViewEditCard()
  const handleLogout = () => {
    props.logout(callback)
  }
  const callback = () => {
    props.history.push('/login')
  }
  return (
    <>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <>
          <img src={avatarUrl} alt="" style={{ width: 100, height: 100, borderRadius: '50%' }} />
          <h3>{`Welcome ${userName}`}</h3>
          <h2>{email}</h2>
          <ChangeEmail /><br />
          <ChangePassword />
          <br />
          <Button type='danger' onClick={handleLogout}>Logout</Button>
        </>
      </div>
    </>
  )
}
const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
