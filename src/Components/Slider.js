import React from "react";
// import "../Styles/main.css";
import "../Styles/slider-def.css";
import Image0 from "../Images/cloud-computing.jpg";
import Image01 from "../Images/ImgServerless.jpeg";
import Image1 from "../Images/2.jpg";
import Image2 from "../Images/winter-tree.jpg";
import Image3 from "../Images/3.jpg";
import Image4 from "../Images/4.jpg";
import Image5 from "../Images/cloud-image1.JPG";
import ImgApigateway from "../Images/Apigateway.png";
import ImagApigateway from "../Images/ImgApigateway.png";
import ImgServerlessdb from "../Images/serverlessdb.png";

export default function Slider() {
  return (
    <div id='slider'>
      <div class='slides'>
        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>What is Serverless ?</h1>
              <h2>
                With a Serverless Architecture, Services such as AWS Lambda and
                Microsoft Azure Functions take care of all the physical
                hardware, virtual machine operating system, and web server
                software management. You only need to worry about your code
                isn't it awesome ?
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={Image01} />
          </div>
        </div>

        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>AWS API Gateway</h1>
              <h2>
                Nam ultrices pellentesque facilisis. In semper tellus mollis
                nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                tortor, pretium sit amet auctor ut, ultrices vel nibh.
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={ImagApigateway} />
          </div>
        </div>
        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>Function As a Service</h1>
              <h2>
                Nam ultrices pellentesque facilisis. In semper tellus mollis
                nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                tortor, pretium sit amet auctor ut, ultrices vel nibh.
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={Image5} />
          </div>
        </div>
        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>Serverless DB</h1>
              <h2>
                Nam ultrices pellentesque facilisis. In semper tellus mollis
                nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                tortor, pretium sit amet auctor ut, ultrices vel nibh.
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={ImgServerlessdb} />
          </div>
        </div>
        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>Lorem ipsum dolor</h1>
              <h2>
                Nam ultrices pellentesque facilisis. In semper tellus mollis
                nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                tortor, pretium sit amet auctor ut, ultrices vel nibh.
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={Image4} />
          </div>
        </div>
      </div>
      {/* 
      <div class='switch'>
        <ul>
          <li>
            <div class='on'></div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      */}
    </div>
  );
}
