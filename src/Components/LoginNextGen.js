import React from "react";
import PreloginNavigation from "./PreloginNavigation";
import PreLoginBody from "./PreLoginBody";

export default function LoginNextGen() {
  return (
    <div className='login-container'>
      <div className='header-item'>
        <PreloginNavigation />
      </div>
      <div className='body-item'>
        <PreLoginBody />
      </div>
      <div className='footer-item'> Footer</div>
    </div>
  );
}
