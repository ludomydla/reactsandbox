import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      label: "",
      id: "",
      type: "text"
    };
  }

  render() {
    return (
      <div>
        <label htmlFor={this.state.id}>{this.state.label}</label>
        <input
          value={this.state.value}
          id={this.state.id}
          name={this.state.id}
          type={this.state.type}
          onChange={console.log}
        />
        <span>Misc message, validation warning or whateva</span>
      </div>
    );
  }
}

export default Input;
