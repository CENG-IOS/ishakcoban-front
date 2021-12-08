import React from "react";
import { ViewButton } from "../components/buttons/homePageButtons/ViewButton";
import { LeftAndRightLines } from "../components/homePagelines/LeftAndRightLines";
import { Logo } from "../components/homePagelines/Logo";
import { VerticalLine } from "../components/homePagelines/VerticalLine";

export const Home = () => {
  return (
    <div className="container-fluid user-select-none mt-5">
    <div className='container'>
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

      <div className="second-section-wrapper">
      <div className='container'>
        <div className="row d-flex flex-row justify-content-center mt-5 pt-5 pb-5">
          <div className="col-5 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center align-items-center pb-5">
            <ViewButton title1='ÇİZİMLERE' title2='GÖZ AT'></ViewButton>
          </div>
          <div className=" col-2 col-md-2 col-lg-2 col-xl-2 rotateVerticalLine pt-5">
            <VerticalLine></VerticalLine>
          </div>
          <div className="col-5 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center pb-5">
            <ViewButton title1='FOTOĞRAFLARA' title2='GÖZ AT'></ViewButton>
          </div>
        </div>
        </div>
      </div>
      <div className="small-screen">
        <div className="d-flex justify-content-center mt-5">
          <hr className="smoothLine"></hr>
        </div>

        <div className="d-flex justify-content-center mt-5">
        <ViewButton title1='ÇİZİMLERE' title2='GÖZ AT'></ViewButton>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <hr className="smoothLine"></hr>
        </div>
        <div className="d-flex justify-content-center mt-5">
        <ViewButton title1='FOTOĞRAFLARA' title2='GÖZ AT'></ViewButton>
        </div>
      </div>
    </div>
  );
};
