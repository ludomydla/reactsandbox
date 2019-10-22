import React from "react";
import { Link } from "react-router-dom";

type HomeProps = {};
type HomeState = {};

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default Home;
