import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styled from "styled-components";
import './NavBar.css'
import Search from '../Search/Search'

const Navigation = styled.nav`
    background: #fff;
    border-bottom: 1px solid lightblue;
    height: 40px;
    widith: 100%
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const Navbarcontainer = styled.div`
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
`;

const StyledLi = styled.li`
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
  position:relative;
  bottom: 30px;
  right: 300px;
`;

const TestLi = styled.li`
text-decoration: none;

`

const IconContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  top: 20px;
  left: 560px;
`

const StyledIcon = styled.div`seac
  padding: 5px;

`

const StyledSpan = styled.span`
padding:20px;

`

const StyledSearch = styled.li`
// background-color: black;
  // background-image: linear-gradient(to top, #ff0844 0%, #ffb199, 100%);
  background-size: 100%;
  // -webkit-background-clip: text;
  // -moz-background-clip: text;
  // -webkit-text-fill-color: red;
  // -moz-text-fill-color: red;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  color: black;
  position:relative;
  bottom: 30px;
  right: 75px;

`
// Moved to Search/Search.js

// const StyledInput = styled.input`
//   height:35px;
//   width: 500px;
//   font-size: 30px;
//   text-align: center;
// `

const BrandContainer = styled.div`
font-size:22pt;
text-decoration: none;
color: black;
position: relative;
right: 425px;
bottom: 8px;

`

const IconLi = styled.li`
  background-size: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  color: black;
  position:relative;
  bottom: 30px;
  right: 300px;
`;

const HomeButton = styled.i`
background-color: black;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199, 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;



`



const NavBar = ({ setAuthenticated }) => {
  return (
    <Navigation>
      <ul>
        <Navbarcontainer>
        <StyledLi>
          <i className="fas fa-utensils"></i>

        </StyledLi>
        <BrandContainer>
           <NavLink to="/" exact={true} activeClassName="active" className="brand_link">
            Flavorgram
          </NavLink>
          </BrandContainer>
      <StyledSearch>
      <StyledSpan>
      <i class="fas fa-search"></i>
      </StyledSpan>
      <Search />
      </StyledSearch>

        {/* <li>
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
      </li> */}
        {/* <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li> */}
        <ul className="navbar__menu">
        <IconContainer>
          <IconLi className="navbar__item">
            <IconLi className="navbar__btn">
           </IconLi>
        <NavLink to="/feed" exact={true} activeClassName="active">
            <HomeButton className="fas fa-home navbar__links"></HomeButton>
        </NavLink>
          </IconLi>
          <IconLi className="navbar__item">
          <NavLink to="/create_recipe" exact={true} activeClassName="active">
          <HomeButton className="fas fa-mortar-pestle navbar__links"></HomeButton>
        </NavLink>

          </IconLi>

          <IconLi className="navbar__btn">
            <StyledIcon className="far fa-user-circle navbar__links"></StyledIcon>
          </IconLi>
        </IconContainer>
        </ul>
    </Navbarcontainer>
      </ul>

    </Navigation>
  );
}

export default NavBar;
