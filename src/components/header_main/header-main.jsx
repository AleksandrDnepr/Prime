import './header-main.css';
import { Component } from "react";

export default class HeaderMain extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  };

  render() {
    return (
      <header>
          <nav className="nav_header">
            {/* <div className = "footer_logo"> 
          <Logo color = "#FFFFFF" />
        </div> */}
          <p className='nav_text'>{this.props.title}</p>
          </nav>
        </header>
    )
  }
};