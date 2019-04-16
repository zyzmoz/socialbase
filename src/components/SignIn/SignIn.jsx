import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (input) => {
    const { name, value } = input;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div >
        <Grid style={{ display: 'block', padding: '8px' }}>
          <Grid.Column >
            <Header as="h2" >
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input fluid icon="mail" name="email" value={email} iconPosition="left" placeholder="Email" 
                  onChange={e => this.handleChange(e.target)} />
                <Form.Input fluid icon="lock" name="password" value={password} iconPosition="left" placeholder="Password" type="password" 
                  onChange={e => this.handleChange(e.target)} />
              </Segment>
              <Button disabled={!email || !password || email.length === 0 || password.length === 0} color="teal" fluid size="large"
                onClick={() => this.props.signIn(email, password)}
              >
                Sign In
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignIn;