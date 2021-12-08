import React from "react";
import instagram from "../images/instagram.png"
import devianart from "../images/devianart.png"
import tiktok from "../images/tiktok.png"
import linkedin from "../images/linkedin.png"
export const Footer = () => {
  return (
    <div className="container-fluid bggradient">
      <div className="row d-flex justify-content-center pt-5 pb-5">
        <div className="col-8 col-md-8 col-lg-8 col-xl-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="col-2 col-md-2 col-lg-2 col-xl-2 d-flex flex-column justify-content-center bg-danger">
          <div className='d-flex justify-content-center align-items-center bg-success w-25 align-self-center'>
            <div ><img className='w-100' src={instagram}></img></div>
            <div ><img className='w-100' src={linkedin}></img></div>
          </div>

          <div className='d-flex justify-content-center align-items-center bg-success w-25 align-self-center'>
          <div><img img className='w-100' src={devianart}></img></div>
          <div><img img className='w-100' src={tiktok}></img></div>
        </div>
          <div className='d-flex justify-content-center align-items-center'>ILETISIM</div>
        </div>
      </div>
    </div>
  );
};
