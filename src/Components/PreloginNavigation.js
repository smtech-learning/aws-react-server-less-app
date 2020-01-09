import React, { Fragment } from "react";
import styled from "styled-components";
import { device } from "./device";
import logo from "../Images/cloudthoughts-3.png";

export default function PreloginNavigation() {
  const Nav = styled.nav`
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const UnorderedList = styled.ul`
    list-style: none;
    flex-direction: row;
    justify-content: flex-end;

    @media ${device.tablet} {
      display: flex;
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
        <Image src={logo} alt='logo' />

        <UnorderedList>
          <LineItem>
            <a href='#'> Login</a>
          </LineItem>
          <LineItem>
            <a href='#'> Register</a>
          </LineItem>
          <LineItem>
            <a href='#'> Products</a>
          </LineItem>
          <LineItem>
            <a href='#'> Help</a>
          </LineItem>
        </UnorderedList>
      </Nav>
    </Fragment>
  );
}
