import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Swapnil
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Our Work</Link>
        </li>
        <li>
          <Link to="/Work">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  box-shadow: rgba(0.5, 0.5, 0.5, 0.5);
  a {
    color: white;
    text-decoration: none;
  }
  li a {
    &:hover {
      color: #23d997;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.5rem;
    font-family: "lobster", sans-serif;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
