import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Input from '../_shared/components/Input'
import Button from '../_shared/components/Button'
import Image from '../_shared/components/Image'
import './LoginPage.scss'
import * as actions from './store/actions'
//import logo from '../../assets/images/qv-arch.svg'
//import { bindActionCreators } from 'redux'

type LoginPageProps = {
  username: string
  password: string
}

type LoginPageDispatchProps = {
  onUsernameChange(username: string): any
  onPasswordChange(password: string): any
}
type LoginPageState = {}

class LoginPage extends React.Component<
  LoginPageProps & LoginPageDispatchProps,
  LoginPageState
> {
  static mapStateToProps = (state: LoginPageProps) => {
    return {
      username: state.username,
      password: state.password
    }
  }

  static mapDispatchToProps = (dispatch: any) => ({
    onUsernameChange: (username: string) =>
      dispatch(actions.onUsernameChange(username)),
    onPasswordChange: (password: string) =>
      dispatch(actions.onPasswordChange(password))
  })

  // Keeping this, until obvious need for bindActionCreator will arise
  // static mapDispatchToProps = (dispatch: any) => {
  //   return bindActionCreators(actions, dispatch)
  // }

  private handleLogin = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Logging in')
  }

  private handleUsernameChange = (username: string) => {
    this.props.onUsernameChange(username)
  }

  private handlePasswordChange = (password: string) => {
    this.props.onPasswordChange(password)
  }

  render() {
    return (
      <div className='login-form__page'>
        <div className='login-form__wrapper'>
          <Image
            src={'assets/images/qv-arch.svg'}
            simple={true}
            className='login-form__logo'
          />
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
            <Button label={'Log in'} onClick={this.handleLogin} />
            <div>
              <Link to='/register'>Register</Link>
              <Link to='/forgot'>Forgot password</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  LoginPage.mapStateToProps,
  LoginPage.mapDispatchToProps
)(LoginPage)
