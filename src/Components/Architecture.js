import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Parallax1 from "../Images/img_parallax.jpg";
import Parallax2 from "../Images/img_parallax2.jpg";
import Parallax3 from "../Images/img_parallax3.jpg";

// body, html {
//     height: 100%;
//     margin: 0;
//     font: 400 15px/1.8 "Lato", sans-serif;
//     color: #777;
//   }

const MainDiv = styled.div`
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 "Lato", sans-serif;
  color: #777;
`;

const BigImage = `
  position: relative;
  opacity: 0.65;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxStyle = styled.div`
  color: #777;
  background-color: white;
  text-align: center;
  padding: 50px 80px;
  text-align: justify;
`;

const LessHeightStyle = styled.div`
  background-color: transparent;
  font-size: 25px;
  color: #f7f7f7;
`;

const ScrollUpStyle = styled.div`
  color: #ddd;
  background-color: #282e34;
  text-align: center;
  padding: 50px 80px;
  text-align: justify;
`;

const BgImage1 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax1});
  min-height: 100%;
`;

const BgImage2 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax2});
  min-height: 400px;
`;

const BgImage3 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax3});
  min-height: 400px;
`;

const Caption = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
`;

const Span = styled.span`
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
`;

const H3 = styled.h3`
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
`;

//   /* Turn off parallax scrolling for tablets and phones */
//   @media only screen and (max-device-width: 1024px) {
//     .bgimg-1, .bgimg-2, .bgimg-3 {
//       background-attachment: scroll;
//     }
//   }

const Architecture = () => {
  return (
    <MainDiv>
      <BgImage1>
        <Caption>
          <Span>Serverless Architecture</Span>
        </Caption>
      </BgImage1>

      <ParallaxStyle>
        <H3 style={{ textAlign: "center" }}>Parallax Demo</H3>
        <p>
          Parallax scrolling is a web site trend where the background content is
          moved at a different speed than the foreground content while
          scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis
          nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit
          pellentesque a, magna turpis est sapien duis blandit dignissim.
          Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum
          consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget
          et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus
          vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar,
          in in neque risus odio. Accumsan fringilla vulputate at quibusdam
          sociis eleifend, aenean maecenas vulputate, non id vehicula lorem
          mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel,
          non sit platea sit, maecenas ante augue etiam maecenas, porta
          porttitor placerat leo.
        </p>
      </ParallaxStyle>

      <BgImage2>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            LESS HEIGHT
          </Span>
        </Caption>
      </BgImage2>

      <div style={{ position: "relative" }}>
        <ScrollUpStyle>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </ScrollUpStyle>
      </div>

      <BgImage3>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            SCROLL UP
          </Span>
        </Caption>
      </BgImage3>
      <div style={{ position: "relative" }}>
        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "center",
            padding: "50px 80px",
            textAlign: "justify"
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>

      <BgImage3>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            SCROLL UP
          </Span>
        </Caption>
      </BgImage3>
      <div style={{ position: "relative" }}>
        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "center",
            padding: "50px 80px",
            textAlign: "justify"
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>
    </MainDiv>
  );
};
export default Architecture;
