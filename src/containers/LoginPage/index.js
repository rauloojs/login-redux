import React, { Component } from 'react';

class LoginPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submited: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      submited: true,
    });
    // TODO: dispatch login action
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputUsername" className="sr-only">Username</label>
        <input
          type="username"
          name="username"
          id="inputUsername"
          className="form-control"
          placeholder="username address"
          required
          autofocus
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label for="inputPassword" className="sr-only">Password</label>
        <input
          type="password"
          name="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }
}

export default LoginPage;