import logo from './header__logo.svg';
import './header.css';

export default function Header() {
  return <header className="header">
    <img src={logo} className="header__logo" alt="logo" />
    <h1 className="header__title">React App</h1>
    <nav className="header__nav">
      <a className="header__nav-link" href="https://reactjs.org">Learn React</a>
    </nav>
  </header>
};