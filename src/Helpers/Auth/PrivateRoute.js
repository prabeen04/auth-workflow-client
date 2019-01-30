import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { message } from "antd";
class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        if (!this.props.token) {
            this.props.history.push('/login');
            message.error('No token!')
        }
    };

    componentWillUpdate(nextProps) {
        if (!nextProps.token) {
            this.props.history.push('/login');
        }
    };
    render() {
        console.log('inside private auth')
        const { component: Component, ...rest } = this.props
        return (
            <Route
                {...rest}
                render={props =>
                    localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/login" />
                }
            />
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        token: auth.token || JSON.stringify(localStorage.getItem('token'))
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));