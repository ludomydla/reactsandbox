import React from "react";
import { Link } from "react-router-dom";
import Input from "../_shared/components/Input";
import Loader from "../_shared/components/Loader";

type LoginPageProps = {};
type LoginPageState = {};

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <br />
        <Input label='Username' id='login-username' type='text' value='' />
        <br />
        <Input label='Password' id='login-password' type='password' value='' />
        <br />
        <Loader />
      </div>
    );
  }
}

export default LoginPage;
