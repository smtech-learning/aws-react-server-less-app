import React, { Fragment } from "react";
import styled from "styled-components";
import { device } from "./device";

export default function PreLoginBody() {
  const CenterCredentialsBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    background: pink;
  `;

  return (
    <Fragment>
      <CenterCredentialsBox> </CenterCredentialsBox>
    </Fragment>
  );
}
