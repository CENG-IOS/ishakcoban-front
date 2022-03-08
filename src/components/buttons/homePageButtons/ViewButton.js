import React,{lazy}from "react";
import { useNavigate } from "react-router-dom";
import drawingP from '../../../assets/images/viviChan.png';
import drawingP2 from '../../../assets/images/photoSample.png';
const ViewButton = (props) => {
  const navigate = useNavigate();
  const clickViewButton = ()=>{
    if(props.title1 == "ÇİZİMLERE"){
      navigate("/Drawings");
    }else{
      navigate("/Photos");
    }
  }
  return (
    <div className="position-relative viewButtonAnimation">
      <button
        onClick={clickViewButton}
        id="vB"
        className="viewButton p-0 m-0 border-0 position-relative d-flex justify-content-center align-items-center bgTransParent"
      >
        <div id="tW" className="position-absolute titleWrapper">
          <div>{props.title1}</div>
          <div>{props.title2}</div>
        </div>
        <img 
          className={
            props.title1 == "ÇİZİMLERE" ? "drawingPhoto" : "photoSample"
          }
          src={props.title1 == "ÇİZİMLERE" ? drawingP : drawingP2}
        ></img>
      </button>
    </div>
  );
};

export default ViewButton;