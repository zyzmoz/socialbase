import React, { Component } from 'react';
import Auth from '../pages/Auth/Auth';
import { connect } from 'react-redux';

const withAuthentication = (WrappedComponent) => {
  const mapState = (state) => ({
    auth: state.auth
  });
  class WithAuthentication extends Component {
    state = {
      auth: null
    }

    componentDidMount() {
      const auth = localStorage.getItem('@socialbase:auth');
      this.setState({ auth });
    }

    render() {
      const { auth } = this.state;
      const { token } = this.props.auth;
      return (
        auth||token ? <WrappedComponent /> : <Auth />
      )
    }
  }
  return connect(mapState)(WithAuthentication);
};

export default withAuthentication;

