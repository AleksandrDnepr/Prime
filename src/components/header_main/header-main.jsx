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
        <div className="nav_header">
            <Logo color="white" /> 
          <p className='nav_text'>{this.props.title}</p>
        </div>
      </header>
    )
  }
};