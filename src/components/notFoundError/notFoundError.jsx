import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import HeaderMain from "../header/header";
import "./notFoundError.css";

export default class NotFoundError extends Component {
  render() {
    return (
      <div className="notFoundPage notFoundPage__container">
        <HeaderMain />
        <main className="notFoundPage__main">
          <p className="notFoundPage__text">Page not found</p>
          <Link to="/" className="notFoundPage__link">
            return to the beginning
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}
