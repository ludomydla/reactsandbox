import React from "react";
import "./styles/Loader.scss";

type InputProps = {};

type InputState = {};

class Input extends React.Component<InputProps, InputState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value,
      isValid: true
    };
  }

  render() {
    return (
      <div className='loader__background'>
        <div className='loader__animation' />
      </div>
    );
  }
}

export default Input;
