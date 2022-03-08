import React, { useEffect} from "react";


export const ForPractise = (props) => {
    const [checked, setChecked] = React.useState(true);

    useEffect(() => {
        console.log(checked);
    }, [checked])
  return (
    <div className="container-fluid mt-5">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-2 bg-danger d-flex justify-content-center align-items-center position-relative">
          <div className="position-absolute w-100 d-flex justify-content-center align-items-center indexContent">Season 1</div>
          <div className="position-absolute w-100 d-flex justify-content-center align-items-center opacity-0 checkBoxIndex">
            <input className="w-100 checkBoxWrapper" type="checkbox" defaultChecked={checked}
            onChange={() => setChecked(!checked)} />
          </div>
          { checked ? 
              <div className="checked position-absolute d-flex justify-content-center align-items-center"></div>
              : null
          }
        </div>
      </div>
    </div>
  );
};
