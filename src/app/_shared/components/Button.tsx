import React from "react";
import { noop } from "../lib/utils";
import "./styles/Button.scss";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: (e: any) => any;
};

type ButtonState = {};

class Button extends React.Component<ButtonProps, ButtonState> {
  // private handleClick = (e: any) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (!this.props.disabled) this.props.onClick(e);
  // };

  render() {
    const { label, disabled, onClick } = this.props;

    return (
      <button className='button' onClick={disabled ? noop : onClick}>
        {label}
      </button>
    );
  }
}

export default Button;
