import React, { Component } from 'react';
import '../../assets/css/master.css';
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  }

  isValid = () => {
    const { username, email, password, password2 } = this.state;
    return (username && email && password && password2) && (password == password2) &&
      (username.length > 0) && (email.length > 0) && (password.length > 0);
  }

  handleChange = (input) => {
    const { name, value } = input;
    this.setState({ [name]: value });
  }

  submit = () => {
    const { username, email, password } = this.state;
    this.props.register(Object.assign({}, { username, email, password }));
  }

  render() {
    const { username, email, password, password2 } = this.state;
    return (
      <div >
        <Grid style={{ display: 'blick', padding: '8px' }}>
          <Grid.Column style={{ paddingTop: '0' }}>
            <Header as="h2">
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="Username"
                  name="username" value={username} onChange={e => this.handleChange(e.target)}
                />
                <Form.Input fluid icon="mail" iconPosition="left" placeholder="Email"
                  name="email" value={email} onChange={e => this.handleChange(e.target)}
                />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password"
                  name="password" value={password} onChange={e => this.handleChange(e.target)}
                />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password Confirmation" type="password"
                  name="password2" value={password2} onChange={e => this.handleChange(e.target)}
                />
              </Segment>
              <Button disabled={!this.isValid()} fluid size="large" color="teal"
                onClick={() => this.submit()}
              >
                Sign Up
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUp;