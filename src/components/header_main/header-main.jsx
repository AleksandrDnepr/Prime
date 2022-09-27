import './header-main.css';
import { Component } from "react";
import Logo from "../logo/logo";

export default class HeaderMain extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  };

  render() {
    return (
      <header>
          <nav className="nav_header">
          <section className="header_logo"> 
            <Logo color="white" className="header_logo"/> 
          <p className='nav_text'>{this.props.title}</p>
          </section>
          </nav>
        </header>
    )
  }
};