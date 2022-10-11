import './header.css';
import { Component } from "react";
import Logo from "../logo/logo";

export default class HeaderMain extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  };

  render() {
    return (
      <header className="header">
        <div className="header__block">
          <Logo color="white" />
          <h1 className="header__title">{this.props.title}</h1>
        </div>
      </header>
    )
  }
};