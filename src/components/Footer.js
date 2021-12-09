import React from "react";
import instagram from "../images/instagram.png";
import devianart from "../images/devianart.png";
import tiktok from "../images/tiktok.png";
import linkedin from "../images/linkedin.png";
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
        <div className="col-2 col-md-2 col-lg-2 col-xl-2 d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center align-items-center w-50 align-self-center">
            <div className="d-flex justify-content-center align-items-center me-4">
            <a href="https://www.instagram.com/ishakcbn/?hl=tr" target="_blank"><img className="imageSize" src={instagram}></img></a>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://www.linkedin.com/in/ishak-%C3%A7oban-b8b027227/" target="_blank"><img className="imageSize" src={linkedin}></img></a>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center align-self-center mt-4">
            <div className="d-flex justify-content-center align-items-center me-4">
            <a href="https://www.deviantart.com/ishakcbn" target="_blank"><img img className="imageSize" src={devianart}></img></a>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://www.tiktok.com/@ishakcbn?lang=en" target="_blank"><img img className="imageSize" src={tiktok}></img></a>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2 fw-bold">
            İLETİŞİM
          </div>
        </div>
      </div>
    </div>
  );
};
