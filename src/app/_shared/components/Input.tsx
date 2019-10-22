import React from "react";
import { InputType } from "../types/definitions";

type InputProps = {
  label: string;
  id: string;
  type: InputType;
  value: string;
};

type InputState = {
  value: string;
  message?: string;
  isValid?: boolean;
};

class Input extends React.Component<InputProps, InputState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value,
      isValid: true
    };
  }

  private handleChange = (e: any) => {
    this.setState({ value: e.target.value });
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { label, id, type } = this.props;

    return (
      <div>
        <label>{label}</label>
        <input
          value={this.state.value}
          id={id}
          name={id}
          type={type}
          onChange={this.handleChange}
        />
        <span>{this.state.message}</span>
      </div>
    );
  }
}

export default Input;
