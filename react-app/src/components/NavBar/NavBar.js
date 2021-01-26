import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styled from "styled-components";

const navbar = styled.nav`
    background: #fff;
    border-bottom: 1px solid lightblue;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const navbarcontainer = styled.div`
background-color: black
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
`;

const styledLi = styled.li`
background-color: red;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199, 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  color: black;
`;

const testLi = styled.li`
text-decoration: none;

`





const NavBar = ({ setAuthenticated }) => {
  return (
    <navbar>
      <div className="searchbar__container navbar__links">
          <div className="searchbar fas fa-search">
            Search</div>
        </div>
      <ul>
        <navbarcontainer>
        <styledLi>
          <NavLink to="/" exact={true} activeClassName="active">
          <i className="fas fa-utensils"></i>
            Flavorgram
          </NavLink>
        </styledLi>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
        <ul className="navbar__menu">
          <testLi className="navbar__item">
            <li className="navbar__btn">
           </li>
            <i className="fas fa-home navbar__links"></i>
          </testLi>
          <li className="navbar__item">
            <i className="fas fa-mortar-pestle navbar__links"></i>
          </li>

          <li className="navbar__btn">
            <i className="far fa-user-circle navbar__links"></i>
          </li>
        </ul>
    </navbarcontainer>
      </ul>

    </navbar>
  );
}

export default NavBar;