import React, { Fragment } from "react";
import styled from "styled-components";
import { device } from "./device";
import logo from "../Images/cloudthoughts-3.png";
import { Route, Switch, Link } from "react-router-dom";
import HamburgerMenu from "../Components/HamburgerMenu";
import { useParams, useHistory } from "react-router-dom";

export default function PreloginNavigation() {
  const history = useHistory();
  console.log(history);

  const Nav = styled.nav`
    background: white;
    display: flex;
    flex-direction: row;
    @media ${device.tablet} {
      justify-content: space-between;
    }
    justify-content: flex-end;
  `;

  const UnorderedList = styled.ul`
    list-style: none;

    @media ${device.tablet} {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    display: none;
  `;

  const LineItem = styled.li`
    margin: 0 10px;
    font-size: 1.5rem;
    padding: 10px;
  `;

  const a = styled.a`
    color: #fff;
  `;

  const Image = styled.img`
    width: 200px;
    height: 100px;
  `;

  return (
    <Fragment>
      <Nav>
        <Link to='/'>
          <Image src={logo} alt='logo' />
        </Link>
        <HamburgerMenu />

        <UnorderedList>
          <LineItem>
            <Link to='/login'> Login</Link>
          </LineItem>
          <LineItem>
            <Link to='/register'> Register</Link>
          </LineItem>
          <LineItem>
            <Link to='/products'> Products</Link>
          </LineItem>
          <LineItem>
            <Link to='/help'> Help</Link>
          </LineItem>
        </UnorderedList>
      </Nav>
    </Fragment>
  );
}
