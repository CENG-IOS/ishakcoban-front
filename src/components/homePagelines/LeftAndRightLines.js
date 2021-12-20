import React from "react";

export const LeftAndRightLines = (props) => {
  return (
    <div >
      <div className='lineWrapper position-relative d-flex flex-column justify-content-center'>
        <hr className={props.page == 'aboutPage' ? 'leftLineForAboutPage position-absolute' :'leftLine position-absolute'}></hr>
        <div className={props.page == 'aboutPage' ? 'leftDotForAboutPage position-absolute' :'leftDot position-absolute'}></div>
      </div>
    </div>
  );
};
