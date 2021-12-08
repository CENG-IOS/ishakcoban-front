import React from "react";

export const LeftAndRightLines = () => {
  return (
    <div >
      <div className='lineWrapper position-relative d-flex flex-column justify-content-center'>
        <hr className='leftLine position-absolute'></hr>
        <div className='leftDot position-absolute'></div>
      </div>
    </div>
  );
};
