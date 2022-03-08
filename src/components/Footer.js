import React, { useState } from "react";
import instagram from "../assets/images/instagram.png";
import devianart from "../assets/images/devianart.png";
import tiktok from "../assets/images/tiktok.png";
import linkedin from "../assets/images/linkedin.png";
import { PopUp } from '../components/PopUp';
 const Footer = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <div className="container-fluid Bg-gradient">
      <div className="row ">
        <div className=" pt-5 pb-5 small-Screen">
          <div className="col-8 col-md-8 col-lg-8 col-xl-8 font-Size">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="col-2 col-md-2 col-lg-2 col-xl-2 d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center align-items-center w-50 align-self-center">
              <div className="d-flex justify-content-center align-items-center me-4">
                <a
                  href="https://www.instagram.com/ishakcbn/?hl=tr"
                  target="_blank"
                >
                  <img className="image-Size" src={instagram}></img>
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.linkedin.com/in/ishak-%C3%A7oban-b8b027227/"
                  target="_blank"
                >
                  <img className="image-Size" src={linkedin}></img>
                </a>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center align-self-center mt-4">
              <div className="d-flex justify-content-center align-items-center me-4">
                <a href="https://www.deviantart.com/ishakcbn" target="_blank">
                  <img img className="image-Size" src={devianart}></img>
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.tiktok.com/@ishakcbn?lang=en"
                  target="_blank"
                >
                  <img img className="image-Size" src={tiktok}></img>
                </a>
              </div>
            </div>
            <div onClick={handleShow} className="d-flex justify-content-center align-items-center mt-2 fw-bold ">
              <span className="contact">İLETİŞİM</span>

            </div>

            {show && <PopUp>

              {show && <div onClick={handleShow} className='position-absolute popup-bg'> </div>}
              {show && <div className='position-fixed d-flex justify-content-end align-items-center mmmmmm'>
                <div onClick={handleShow} className='position-relative popup-cross d-flex justify-content-center align-items-center'>
                  <div className='position-absolute line1'></div>
                  <div className='position-absolute line2'></div>
                </div></div>}
              {show && <div className='popup position-fixed sss'>
      
                <div className='col-12 d-flex flex-column p-5 justify-content-center align-items-stretch bg-light popupContent'>

                  <div>
                    <input className="contact-inputs" type="text" id="Name" name="Name" placeholder="İsim" />
                  </div>
                  <div className="mt-3">
                    <input className="contact-inputs" type="text" id="surName" name="surName" placeholder="Soyisim" />
                  </div>
                  <div className="mt-3">
                    <input className="contact-inputs" type="email" id="email" name="email" placeholder="Mail Adresin" />
                  </div>
                  <div className="mt-3">
                    <textarea className="contact-inputs w-100" name="paragraph_text" cols="50" rows="5" placeholder="Açıklama"></textarea>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-5 mb-3  "><button className="contact-send-button">GÖNDER</button></div>
                </div>

              </div>}
            </PopUp>}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;