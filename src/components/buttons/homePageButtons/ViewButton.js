import React, { useEffect } from "react";
import drawingP from "../../../images/viviChan.png";
import drawingP2 from "../../../images/photoSample.png";
import { getByTitle } from "@testing-library/dom";
export const ViewButton = (props) => {
  return (
    <div className="position-relative viewButtonAnimation">
      <button
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
