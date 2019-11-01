import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Input from "../_shared/components/Input";
import Button from "../_shared/components/Button";
import Image from "../_shared/components/Image";
import "./LoginPage.scss";
import { onUsernameChange, onPasswordChange } from "./store/actions";
//const logo = require("../../assets/images/qv-arch.svg");
import logo from "../../assets/images/qv-arch.svg";
import { getUserName, getPassword } from "./store/getters";

type LoginPageProps = {
  username: string;
  password: string;
};

type LoginPageDispatchProps = {
  onUsernameChange(username: string): any;
  onPasswordChange(password: string): any;
};
type LoginPageState = {};

class LoginPage extends React.Component<
  LoginPageProps & LoginPageDispatchProps,
  LoginPageState
> {
  static mapStateToProps = (state: LoginPageProps) => {
    return {
      username: getUserName(state),
      password: getPassword(state)
    };
  };

  static mapDispatchToProps = (dispatch: any) => ({
    onUsernameChange: (username: string) =>
      dispatch(onUsernameChange(username)),
    onPasswordChange: (password: string) => dispatch(onPasswordChange(password))
  });

  private handleLogin = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Sending", this.props.username, this.props.password);
  };

  private handleUsernameChange = (username: string) => {
    console.log("PAGE handleUsernameChange", username);
    this.props.onUsernameChange(username);
  };

  private handlePasswordChange = (password: string) => {
    this.props.onPasswordChange(password);
  };

  render() {
    console.log("RENDER username", this.props.username);
    console.log("RENDER password", this.props.password);

    return (
      <div className='login-form__page'>
        <div className='login-form__wrapper'>
          <Image src={logo} simple={true} className='login-form__logo' />
          <div className='login-form__form'>
            <Input
              placeholder='Zadaj uzivatelske meno'
              id='login-username'
              type='text'
              value={this.props.username}
              onChange={this.handleUsernameChange}
            />
            <Input
              placeholder='Zadaj heslo'
              id='login-password'
              type='password'
              value={this.props.password}
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

export default connect(
  LoginPage.mapStateToProps,
  LoginPage.mapDispatchToProps
)(LoginPage);
