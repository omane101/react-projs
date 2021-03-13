import React, { Component } from "react";
// Database management
import axios from 'axios';
// styling
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap compponents
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Signup from "../signup-component/index";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onError = this.onError.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      error_message: false,
    }
  }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value,
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value,
      });
    }

    onError() {
      this.setState({
        error_message: true,
        password: '',
      });
    }

    onSubmit(e) {
      e.preventDefault();
      // check against the database to make user exists
      const user = {
        username: this.state.username,
        password: this.state.password,
      };

      // TODO: validate if a user exists in backend. Current method only suppresses the issue

      axios
        .post('http://localhost:5000/auth/login', user)
        .then((res) => console.log(res.data))
        .catch((error) => { this.onError() });

      /**  make sure there is no user logged in already
       axios
         .get('http://localhost:5000/auth/logout');

       log in
         .catch((error) => {
          return (<Alert variant={'danger'}> User Does Not Exist </Alert>);
         }); */

      console.log(user);
    }
  
  render() { 
  return (
    <Container>
      {this.state.error_message 
      ? <Alert variant="danger"> Invalid username or password </Alert>
      : <Alert variant="success">  Logging in ... </Alert>
    }
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4} className="my-auto">
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Text>
                <h2> React Roommates! </h2>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="username"
                placeholder="Enter email"
                onChange={this.onChangeUsername}
                value={this.state.username}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={this.state.password}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Button
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>                
              </Form.Group>
              <Form.Group>
                <Button variant="secondary">Register</Button>
              </Form.Group>
            </Form.Row>
            <Form.Label variant="danger"> {this.state.error_message} </Form.Label>              
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
}