import React, { useEffect, useState } from "react";

export const VerticalLine = () => {
  const [animation, setAnimation] = useState(0);
  useEffect(() => {
    var element = document.getElementById("vL");
    element.classList.add("verticalLineAnimation");
    var element = document.getElementById("vD");
    element.classList.add("verticalDotAnimation");
    
  }, [animation])
  return (
    <div >
      <div className="verticalLineWrapper position-relative d-flex flex-column justify-column-center align-items-center ">
        <div id='vL' className="verticalLine position-absolute"></div>
        <div id='vD' className="verticalDot position-absolute"></div>
      </div>
    </div>
  );
};
