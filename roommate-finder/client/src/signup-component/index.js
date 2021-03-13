import React, { Component, Fragment } from 'react';
// Database management
import axios from 'axios';
// Bootstrap compponents
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
// style
import styles from './signup.module.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      username: this.email,
      city: '',
      state: '',
      cities: [],
      states: [],
    };
  }

  componentDidMount() {
    this.setState({
      cities: ['New York', 'Boston', 'Washington'],
      states: ['NY', 'MA', 'DC'],
    });
  }

  /** sets both username and email from signup form */
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const new_user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      city: this.state.city,
      state: this.state.state,
    };

    axios
      .post('http://localhost:5000/auth/signup/', new_user)
      .then((res) => console.log(res.data));

    console.log(new_user);
  }

  render() {
    return (
      <Container>
        <div className={styles.container}>
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='formGridAddress1'>
                <Form.Label>First Name</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridAddress1'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridState'>
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  as='select'
                  defaultValue='Choose...'
                  value={this.state.city}
                  onChange={this.onChangeCity}
                >
                  {this.state.cities.map(function (city) {
                    return (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='formGridState'>
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  as='select'
                  defaultValue='Choose...'
                  value={this.state.state}
                  onChange={this.onChangeState}
                >
                  {this.state.states.map(function (state) {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button variant='primary' type='submit' block>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}
