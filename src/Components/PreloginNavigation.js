import React from "react";
import styled from "styled-components";

export default function PreloginNavigation() {
  const Nav = styled.nav`
    background: white;
  `;

  const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `;

  const LineItem = styled.li`
    margin: 0 10px;
    font-size: 1.5rem;
    padding: 10px;
  `;

  const a = styled.a`
    color: #fff;
  `;

  return (
    <Nav>
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
  );
}
