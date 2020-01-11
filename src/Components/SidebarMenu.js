import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { device } from "./device";
import { Context } from "./ContextOneProvider";

export default function SidebarMenu() {
  const { show, toggleShow } = useContext(Context);

  const SidebarDiv = styled.div`
    position: absolute;
    width: 300px;
    height: 75.5%;
    background: #333;
    left: ${props => (show ? "0px" : "-300px")};
    top: 100px;
    display: flex;
    display-direction: row;
    justify-content: space-between;
    transition: 5s;
  `;

  const SidebarLineItem = styled.li`
    list-style: none;
    color: #fff;
    font-size: 20px;
    padding: 20px 24px;
  `;

  return (
    <SidebarDiv id='sidebar'>
      <ul>
        <SidebarLineItem> Home</SidebarLineItem>
        <SidebarLineItem> Work</SidebarLineItem>
        <SidebarLineItem> About</SidebarLineItem>
        <SidebarLineItem> Contact</SidebarLineItem>
      </ul>

      <ul>
        <SidebarLineItem>
          <span id='close' onClick={toggleShow}>
            Xx
          </span>
        </SidebarLineItem>
      </ul>
    </SidebarDiv>
  );
}
