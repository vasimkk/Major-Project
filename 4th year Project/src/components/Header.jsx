import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from './Navbar'
const Header = () => {
  return (
    <MainHeader>
     <NavLink to='/'>
        <img src="https://i.pinimg.com/564x/60/cb/f7/60cbf7925dfcc626fad0aad680a3e95a.jpg" className="logo"  />
        </NavLink>
        <Navbar/>
    </MainHeader>
  );

}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 70px;
  background-color: #B8B8B8	;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 15%;
    max-width: 15%;

  }
`;
export default Header;
