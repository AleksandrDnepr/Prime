import logo from './header__logo.svg';
import './header.css';

export default function Header() {
  return <header className="header">
    <img src={logo} className="header__logo" alt="logo" />
    <p>Edit <code>src/App.js</code> and save to reload.</p>
    <a className="header__nav-link" href="https://reactjs.org">Learn React</a>
  </header>
};