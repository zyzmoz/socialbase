import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register, signIn } from '../../actions/auth';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import '../../assets/css/master.css';

const mapState = (state) => ({
  auth: state.auth
});

const actions = {
  register,
  signIn

}

class Auth extends Component {
  state = {
    flag: true   
  }
  render() {

    const { flag } = this.state;
    console.log(this.props);
    return (
      <div className="auth-form wrapper">
        <div className="switch">
          <div className={flag ? 'switch-item active' : 'switch-item'}
            onClick={() => this.setState({ flag: true })}
          >Sign In</div>
          <div className={!flag ? 'switch-item active' : 'switch-item'}
            onClick={() => this.setState({ flag: false })}
          >Sign Up</div>
        </div>
        {
          flag ? <SignIn signIn={this.props.signIn} /> : <SignUp register={this.props.register} />
        }

      </div>
    );
  }
}

export default connect(mapState, actions)(Auth);