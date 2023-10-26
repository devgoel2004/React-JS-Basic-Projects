import React from "react";
import "../styles/Header.scss";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <nav>
        <h1>QuantumSoft.</h1>
        <main>
          <HashLink to="/#home">Home</HashLink>
          <NavLink to="/contact">Contact</NavLink>
          <HashLink to="/#about">About</HashLink>
          <HashLink to="/#brand">Brands</HashLink>
          <NavLink to="/#services">Services</NavLink>
        </main>
      </nav>
    </>
  );
};

export default Header;
