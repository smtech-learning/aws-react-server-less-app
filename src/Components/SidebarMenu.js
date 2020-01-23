import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { device } from "./device";
import { Context } from "./ContextOneProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function SidebarMenu() {
  const { show, toggleShow } = useContext(Context);

  const SidebarDiv = styled.div`
  
    position: absolute;
    z-index:2
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
        box-shadow: 0 2px 50px 0 #0076ff;

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
        <SidebarLineItem>
          <FontAwesomeIcon className='social-icon' icon={faCoffee} size='2x' />
          Login
        </SidebarLineItem>
        <SidebarLineItem> Register</SidebarLineItem>
        <SidebarLineItem> Products</SidebarLineItem>
        <SidebarLineItem> Help</SidebarLineItem>
      </ul>

      <ul>
        <SidebarLineItem>
          <span id='close' onClick={toggleShow1}>
            X
          </span>
        </SidebarLineItem>
      </ul>
    </SpecialSidebarDiv>
  );
}
