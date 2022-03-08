import React,{useState,useEffect} from "react";
import { FilterButton } from "./buttons/FilterButton";

export const FilterSection = (props) => {
  const [value, setValue] = useState(null)




  
  return (
    <div className="container p-0">
      <div className="filter-wrapper container" >
        <div className="container ">
          <div className="filterSectionInputWrapper" >
            {props.children}
          </div>

          <div className="mediumSizeAndUp">
            <div className={props.filterType == "drawing" ? "mt-3 filterSectionFont1" : 'mt-3 filterSectionFont1ForPhoto'}>{props.filterType == "drawing" ? 'SEZON' : 'YIL'}</div>

            <hr className="filterSectionLines "></hr>

            <div className="filterSectionFont2">
              <div className="row d-flex justify-content-center">
                <div className="col-3 col-md-2 mt-3">
                  <FilterButton buttonType={props.filterType == "drawing" ? "drawingFilter" : null}></FilterButton>
                </div>
                <div className="col-3 col-md-2 mt-3">
                  <FilterButton buttonType={props.filterType == "drawing" ? "drawingFilter" : null}></FilterButton>
                </div>
                <div className="col-3 col-md-2 mt-3">
                  <FilterButton buttonType={props.filterType == "drawing" ? "drawingFilter" : null}></FilterButton>
                </div>
                <div className="col-3 col-md-2 mt-3">
                  <FilterButton buttonType={props.filterType == "drawing" ? "drawingFilter" : null}></FilterButton>
                </div>
                <div className="col-3 col-md-2 mt-3">
                  <FilterButton buttonType={props.filterType == "drawing" ? "drawingFilter" : null}></FilterButton>
                </div>
                
                
              </div>
            </div>

            {props.filterType == "drawing" ? <div> <div className="filterSectionFont1 mt-2">KATEGORİ</div>

              <hr className="filterSectionLines"></hr>

              <div className="filterSectionFont2 pb-4">
                <div className="row d-flex justify-content-center">
                  <div className="col-3 col-md-2 mt-3">
                    <FilterButton buttonType='drawingFilter'></FilterButton>
                  </div>
                  <div className="col-3 col-md-2 mt-3">
                    <FilterButton buttonType='drawingFilter'></FilterButton>
                  </div>
                  <div className="col-3 col-md-2 mt-3">
                    <FilterButton buttonType='drawingFilter'></FilterButton>
                  </div>
                  <div className="col-3 col-md-2 mt-3">
                    <FilterButton buttonType='drawingFilter'></FilterButton>
                  </div>
                  <div className="col-3 col-md-2 mt-3">
                    <FilterButton buttonType='drawingFilter'></FilterButton>
                  </div>
                </div>
              </div></div> : <br></br>}
          </div>
          <div className="smallSize">
            <div className="container">
              <div className={props.filterType == "drawing" ? "row filterSectionFont1 mt-3" : "row filterSectionFont1ForPhoto mt-3"}>

                <div className={props.filterType == "drawing" ? "col-6 d-flex justify-content-center align-items-center" : "col-12 d-flex justify-content-center align-items-center"}>
                  {props.filterType == "drawing" ? 'SEZON' : 'YIL'}
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  {props.filterType == "drawing" ? 'KATEGORİ' : null}
                </div>



              
              </div>
              <hr className="filterSectionLines"></hr>
              <div className="row filterSectionFont2 ">
                <div className={props.filterType == "drawing" ? "col-6 d-flex flex-column align-items-center justify-content-center" : "col-12 d-flex flex-column align-items-center justify-content-center"}>

                  <div className="col-8 position-relative">
                    <div ><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>

                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>
                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>
                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>

                </div>
                {props.filterType == "drawing" ?
                  <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <div className="col-8 position-relative">
                    <div ><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>

                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>
                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>
                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>

                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>
                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>
                  <div className="col-8 position-relative mt-3">
                    <div><FilterButton buttonType={props.filterType == "drawing" ? 'drawingFilter' : null}></FilterButton></div>
                  </div>
                  
                </div> : null
                }
                
              </div>
              <div className="pb-2">
                <hr className="filterSectionLines"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
