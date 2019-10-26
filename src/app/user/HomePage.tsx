import React from "react";
import { Link } from "react-router-dom";

type HomePageProps = {};
type HomePageState = {};

class HomePage extends React.Component<HomePageProps, HomePageState> {
  render() {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/example'>Example</Link>
      </div>
    );
  }
}

export default HomePage;
