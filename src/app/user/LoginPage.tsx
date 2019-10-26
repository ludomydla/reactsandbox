import React from "react";
import { Link } from "react-router-dom";
import Input from "../_shared/components/Input";
import Button from "../_shared/components/Button";
import Image from "../_shared/components/Image";
import "./LoginPage.scss";
//const logo = require("../../assets/images/qv-arch.svg");
import logo from "../../assets/images/qv-arch.svg";

type LoginPageProps = {};
type LoginPageState = {};

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  render() {
    return (
      <div className='login-form__page'>
        <div className='login-form__wrapper'>
          <Image src={logo} simple={true} className='login-form__logo' />
          <Input
            placeholder='Zadaj uzivatelske meno'
            id='login-username'
            type='text'
            value=''
          />
          <Input
            placeholder='Zadaj heslo'
            id='login-password'
            type='password'
          />
          <Button label={"Log in"} onClick={console.log} />
          <div>
            <Link to='/register'>Register</Link>
            <Link to='/forgot'>Forgot password</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
