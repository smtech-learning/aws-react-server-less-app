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
    // background: #3e88a3  -> This is the color of the background image itself so not using this color but keeping here for reference.
    background: #333
    // left: ${props =>
      show
        ? "0px"
        : "-300px"}; Not using this way because this calls for a component 
    //re-render and when the component re-renders the transition property is not working.
    left:-300px;
    &.active{
        left:0px;
    }
    top: 100px;
    display: flex;
    display-direction: row;
    justify-content: space-between;
    transition: all 500ms ease;

  `;

  const SpecialSidebarDiv = styled(SidebarDiv)`
    transition: all 500ms ease;
  `;

  const SidebarLineItem = styled.li`
    list-style: none;
    color: #fff;
    font-size: 20px;
    padding: 20px 24px;
  `;

  const toggleShow1 = () => {
    document.getElementById("sidebar").classList.remove("active");
  };

  return (
    <SpecialSidebarDiv id='sidebar' className={show ? "active" : ""}>
      <ul>
        <SidebarLineItem> Home</SidebarLineItem>
        <SidebarLineItem> Work</SidebarLineItem>
        <SidebarLineItem> About</SidebarLineItem>
        <SidebarLineItem> Contact</SidebarLineItem>
      </ul>

      <ul>
        <SidebarLineItem>
          <span id='close' onClick={toggleShow1}>
            Xx
          </span>
        </SidebarLineItem>
      </ul>
    </SpecialSidebarDiv>
  );
}