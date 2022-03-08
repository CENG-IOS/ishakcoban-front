import React from "react";
import { LeftAndRightLines } from "../components/homePagelines/LeftAndRightLines";
import Logo  from "../components/homePagelines/Logo";
const About = () => {
   return (
    <div className="container-fluid user-select-none mt-5 aboutFont">
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-3 col-sm-4 col-md-4 col-lg-5 col-xl-5 p-0 d-flex flex-column justify-content-center">
            <LeftAndRightLines></LeftAndRightLines>
          </div>
          <div className="col-6 col-sm-4 col-md-4 col-lg-2 col-xl-2 d-flex justify-content-center align-items-center">
            <Logo></Logo>
          </div>
          <div className="col-3 col-sm-4 col-md-4 col-lg-5 col-xl-5 p-0 d-flex flex-column justify-content-center rotateLeftLine">
            <LeftAndRightLines></LeftAndRightLines>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex flex-column-reverse flex-sm-row justify-content-around align-items-center">
          <div className="col-12 col-sm-7 col-md-5 col-lg-4 align-self-sm-center justify-self-sm-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            lectus vehicula, ultrices nisi a, commodo arcu. Suspendisse potenti.
            Praesent dictum luctus dui, quis faucibus enim. Vivamus non
            ullamcorper nunc, pretium tempor est. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum quis aliquet diam, elementum auctor libero. Aenean in
            eros in diam rutrum fermentum quis eget nunc. Donec non aliquam
            diam.
          </div>
          <div className="col-12 col-sm-5 col-md-5 d-flex flex-column justify-content-center align-items-center mb-4 mb-sm-0">
            <div className="square"></div>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">

        <LeftAndRightLines page='aboutPage'></LeftAndRightLines>

      </div>
      <div className="container mt-5">
        <div className="d-flex flex-column-reverse flex-sm-row-reverse justify-content-around align-items-center">
          <div className="col-12 col-sm-7 col-md-5 col-lg-4 align-self-sm-center justify-self-sm-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            lectus vehicula, ultrices nisi a, commodo arcu. Suspendisse potenti.
            Praesent dictum luctus dui, quis faucibus enim. Vivamus non
            ullamcorper nunc, pretium tempor est. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum quis aliquet diam, elementum auctor libero. Aenean in
            eros in diam rutrum fermentum quis eget nunc. Donec non aliquam
            diam.
          </div>
          <div className="col-12 col-sm-5 col-md-5 d-flex flex-column justify-content-center align-items-center mb-4 mb-sm-0">
            <div className="square"></div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="rotateLeftLine"><LeftAndRightLines page='aboutPage'></LeftAndRightLines></div>

      </div>

      <div className="container mt-5 mb-5">
        <div className="d-flex flex-column-reverse flex-sm-row justify-content-around align-items-center">
          <div className="col-12 col-sm-7 col-md-5 col-lg-4 align-self-sm-center justify-self-sm-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            lectus vehicula, ultrices nisi a, commodo arcu. Suspendisse potenti.
            Praesent dictum luctus dui, quis faucibus enim. Vivamus non
            ullamcorper nunc, pretium tempor est. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum quis aliquet diam, elementum auctor libero. Aenean in
            eros in diam rutrum fermentum quis eget nunc. Donec non aliquam
            diam.
          </div>
          <div className="col-12 col-sm-5 col-md-5 d-flex flex-column justify-content-center align-items-center mb-4 mb-sm-0">
            <div className="square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;