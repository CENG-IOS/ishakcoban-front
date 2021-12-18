import React, { useEffect, useState } from "react";

export const FilterButton = (props) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked);
  }, [checked])
  return (
    <div className="container-fluid p-0 m-0 d-flex justify-content-center align-items-center position-relative">
      <br></br>

      <div className="position-absolute w-100 d-flex justify-content-center align-items-center indexContent">Season 1</div>
      <div className="position-absolute w-100 d-flex justify-content-center align-items-center opacity-0 checkBoxIndex">
        <input className="w-100 checkBoxWrapper" type="checkbox" defaultChecked={checked}
          onChange={() => setChecked(!checked)} />
      </div>
      {checked ?
        <div className={props.buttonType == "drawingFilter" ? "checked position-absolute d-flex justify-content-center align-items-center" : "checkedForPhoto position-absolute d-flex justify-content-center align-items-center"}></div>
        
        : null
      }


    </div>
  );
};
