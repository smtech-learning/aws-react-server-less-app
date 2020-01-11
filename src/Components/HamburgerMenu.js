import React, { useContext } from "react";
import styled from "styled-components";
import { device } from "./device";
import { Context } from "./ContextOneProvider";

export default function HamburgerMenu() {
  const { show, toggleShow } = useContext(Context);

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

  return (
    <ToggleButton onClick={toggleShow}>
      <ToggleButtonSpan> </ToggleButtonSpan>
      <ToggleButtonSpan> </ToggleButtonSpan>
      <ToggleButtonSpan> </ToggleButtonSpan>
    </ToggleButton>
  );
}
