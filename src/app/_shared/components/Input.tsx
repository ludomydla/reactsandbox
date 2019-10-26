import React from "react";
import { InputType } from "../types/definitions";
import "./styles/Input.scss";

type InputProps = {
  label?: string;
  id: string;
  type: InputType;
  value?: string;
  placeholder?: string;
  onClick?: (value: string) => any;
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
      value: props.value ? props.value : "",
      isValid: true
    };
  }

  private handleChange = (e: any) => {
    const value = e.target.value;
    this.setState({ value });
    if (this.props.onClick && typeof this.props.onClick == "function") {
      this.props.onClick(value);
    }
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { label, id, type, placeholder } = this.props;

    return (
      <div className='input'>
        {label && <label>{label}</label>}
        <input
          value={this.state.value}
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
          className='input__field'
        />
        <span>{this.state.message}</span>
      </div>
    );
  }
}

export default Input;
