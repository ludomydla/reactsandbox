import React from "react";
import { Link } from "react-router-dom";
import Input from "../_shared/components/Input";
import Button from "../_shared/components/Button";
import Image from "../_shared/components/Image";
import "./LoginPage.scss";
//const logo = require("../../assets/images/qv-arch.svg");
import logo from "../../assets/images/qv-arch.svg";

type LoginPageProps = {};
type LoginPageState = {
  username: string;
  password: string;
};

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  state = {
    username: "",
    password: ""
  };

  private handleLogin = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Sending", this.state);
  };

  private handleUsernameChange = (username: string) => {
    this.setState(Object.assign(this.state, { username }));
  };

  private handlePasswordChange = (password: string) => {
    this.setState(Object.assign(this.state, { password }));
  };

  render() {
    return (
      <div className='login-form__page'>
        <div className='login-form__wrapper'>
          <Image src={logo} simple={true} className='login-form__logo' />
          <div className='login-form__form'>
            <Input
              placeholder='Zadaj uzivatelske meno'
              id='login-username'
              type='text'
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <Input
              placeholder='Zadaj heslo'
              id='login-password'
              type='password'
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <Button label={"Log in"} onClick={this.handleLogin} />
            <div>
              <Link to='/register'>Register</Link>
              <Link to='/forgot'>Forgot password</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
