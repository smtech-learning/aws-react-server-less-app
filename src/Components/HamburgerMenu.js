import React from "react";
import styled from "styled-components";
import { device } from "./device";

export default function HamburgerMenu() {
  const ToggleButton = styled.div`
    position: absolute;
    top: 30px;
    left: 10px;
    cursor: pointer;
    @media ${device.tablet} {
      display: none;
    }
    display: block;
  `;

  const ToggleButtonSpan = styled.span`
    width: 45px;
    height: 4px;
    background: #000;
    display: block;
    margin-top: 4px;
  `;

  const show = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  return (
    <ToggleButton onclick={show}>
      <ToggleButtonSpan> </ToggleButtonSpan>
      <ToggleButtonSpan> </ToggleButtonSpan>
      <ToggleButtonSpan> </ToggleButtonSpan>
    </ToggleButton>
  );
}
