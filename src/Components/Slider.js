import React from "react";
// import "../Styles/main.css";
import "../Styles/slider-def.css";
import Image0 from "../Images/cloud-computing.jpg";
import Image1 from "../Images/1.jpg";
import Image2 from "../Images/2.jpg";
import Image3 from "../Images/3.jpg";
import Image4 from "../Images/4.jpg";

export default function Slider() {
  return (
    <div id='slider'>
      <div class='slides'>
        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>What is Serverless Computing ?</h1>
              <h2>
                Nam ultrices pellentesque facilisis. In semper tellus mollis
                nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                tortor, pretium sit amet auctor ut, ultrices vel nibh.
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={Image0} />
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
            <img src={Image1} />
          </div>
        </div>
        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>Function As a Service (AWS Lambda)</h1>
              <h2>
                Nam ultrices pellentesque facilisis. In semper tellus mollis
                nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                tortor, pretium sit amet auctor ut, ultrices vel nibh.
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={Image2} />
          </div>
        </div>
        <div class='slider'>
          <div class='legend'></div>
          <div class='content'>
            <div class='content-txt'>
              <h1>No-SQL 100% managed DB (DynamoDB)</h1>
              <h2>
                Nam ultrices pellentesque facilisis. In semper tellus mollis
                nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                tortor, pretium sit amet auctor ut, ultrices vel nibh.
              </h2>
            </div>
          </div>
          <div class='image'>
            <img src={Image3} />
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
    </div>
  );
}
