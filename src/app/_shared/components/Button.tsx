import React from "react";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => any;
};

type ButtonState = {};

class Button extends React.Component<ButtonProps, ButtonState> {
  private handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (!this.props.disabled) this.props.onClick();
  };

  render() {
    const { label } = this.props;

    return <button onChange={this.handleClick}>{label}</button>;
  }
}

export default Button;
