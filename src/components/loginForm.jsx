import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { account } = this.state;

    return (
      <div className="row">
        <div className="col-6">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              value={account.username}
              onChange={this.handleChange}
              label="Username"
            />
            <Input
              name="password"
              value={account.password}
              onChange={this.handleChange}
              label="Password"
            />

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
