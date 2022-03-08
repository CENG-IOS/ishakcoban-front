import React, { useState, useEffect, Suspense } from 'react'
import { FilterSection } from '../components/FilterSection'
import viviChan from "../assets/images/viviChan.jpg"
import { PopUp } from '../components/PopUp';
import Compress from "react-image-file-resizer";
import { useSelector, useDispatch } from "react-redux";
import { PopupActions } from '../store/slices/Popup';
import { useNavigate, useParams } from 'react-router-dom';
import { ImageGrid } from '../components/ImageGrid';

const Drawings = () => {
  const [compressedFile, setCompressedFile] = useState(null);
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState(null);
  const [inputData,setInputData] = useState(null)
  const [inputValue,setInputValue] = useState('')
  const [specificData, SetSpecificData] = useState(null);
  const popupState = useSelector(state => state.popup.popupState)
  const dispatch = useDispatch();
  const [id, setID] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  if (popupState) {
    document.body.style.overflowY = "hidden"// Set the style

  } else {
    document.body.style.overflowY = "scroll"// Set the style
  }



  /**********************************************************************/
  useEffect(() => {
    fetch("http://localhost:4000/drawings", {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAllData(data)
      });
  }, [])
  /**********************************************************************/
  const handleShow = () => { dispatch(PopupActions.changeState()) };

  const onFileResize = (e) => {
    const file = e.target.files[0];
    console.log(e)
    Compress.imageFileResizer(
      file, // the file from input
      3773, // width
      5019, // height
      "JPEG", // compress format WEBP, JPEG, PNG
      50, // quality
      0, // rotation
      (uri) => {
        console.log(uri);
        setCompressedFile(uri)
        // You upload logic goes here
      },
      "base64" // blob or base64 default base64
    );
  }

  useEffect(() => {
    if (id != null) {
      fetch("http://localhost:4000/drawings/" + id, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => {
          SetSpecificData(data)

        });
    }
  }, [id])


  useEffect(() => {
    if (params.drawingID != null) {
      if (!popupState) {
        dispatch(PopupActions.changeState())
      }
      fetch("http://localhost:4000/drawings/" + params.drawingID, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => {
         

          SetSpecificData(data)


        }).catch(err => console.log(err))
    }

  }, [params.drawingID])

  const inputHandler = (e) => {
    setInputValue(e.target.value)
 
  }

  useEffect(() => {
    if(inputData != null){
      console.log("inputData  " + inputData.length )

    }
    
    console.log("inputValue  " + inputValue )

    if(inputValue != ''){
      fetch("http://localhost:4000/filter/" + inputValue, {
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((response) => response.json())
        .then((data) => {
         
          setInputData(data)


        });
    }else{
      setInputData(null);
    }

  }, [inputValue])
  return (
    <div >

      <FilterSection filterType='drawing'>
      <input
      className={"filterSectionInput mt-5" }
      placeholder={"Çizim ara..."}
      onChange={inputHandler}
    ></input></FilterSection>


      <input
        id="file"
        accept="image/*,capture=camera"
        capture="”camera"
        type="file"
        onChange={onFileResize}

      />
     {inputValue != '' && inputData != null && inputData.length == 0 ?
     <div className='d-flex justify-content-center w-100 not-found'>Data Not Found</div>
     
     :
     <div className="img-wrapper">
          {allData != null && (inputData == null || inputData != null && inputData.length != 0) && inputValue == ''  ? allData.map(e => {
            return <div key={e._id} className='img-content-wrapper position-relative'><img key={e._id} className='each-img' src={viviChan} alt={e.name}></img>

              <div onClick={() => {
                dispatch(PopupActions.changeState()); setID(e._id); navigate('/Drawings/' + e._id);
              }}><ImageGrid name={e.name.toUpperCase()}></ImageGrid></div>


            </div>

          }) : ((allData != null && inputData != null && inputData.length != 0 ) &&  inputData.map(e =>{
            return <div key={e._id} className='img-content-wrapper position-relative'><img key={e._id} className='each-img' src={viviChan} alt={e.name}></img>

              <div onClick={() => {
                dispatch(PopupActions.changeState()); setID(e._id); navigate('/Drawings/' + e._id);
              }}><ImageGrid name={e.name.toUpperCase()}></ImageGrid></div>


            </div> 
            
          }) )}

        </div>
      }
        


      {popupState && <PopUp>
        {specificData != null &&
          <div className='col-12  d-flex justify-content-center align-items-stretch'>

            <div className='col-6 d-flex justify-content-center align-items-center popup-img-wrapper'><img className='popup-img' src={specificData.filePath} alt={specificData.name}></img></div>
            <div className='col-6 content-description position-relative'>
              <div className='d-flex justify-content-center mt-3'>{specificData.name}</div>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='row w-100'>
                  <div className='col-2 d-flex justify-content-end p-0 m-0 align-items-center'><div className='circleFirst'></div></div>
                  <div className='col-8 d-flex flex-column justify-content-center p-0 m-0'><hr className='lineBetweenCircles'></hr></div>
                  <div className='col-2 d-flex justify-content-start p-0 m-0 align-items-center'><div className='circleLast'></div></div>
                </div>
              </div>
              <div className='d-flex justify-content-center mt-3'>TOOLS</div>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='row w-100'>
                  <div className='col-2 d-flex justify-content-end p-0 m-0 align-items-center'><div className='circleFirst'></div></div>
                  <div className='col-8 d-flex flex-column justify-content-center p-0 m-0'><hr className='lineBetweenCircles'></hr></div>
                  <div className='col-2 d-flex justify-content-start p-0 m-0 align-items-center'><div className='circleLast'></div></div>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='row w-100'>
                  <div className='col-2 d-flex justify-content-end p-0 m-0 align-items-center mt-2'><div className='circleFirst'></div></div>
                  <div className='col-10 d-flex flex-column justify-content-center p-0 m-0 bg-danger'><div className=' ms-2'>asdsad</div></div>
                </div>
              </div>
              {specificData != null ? <div className='mt-2'>{specificData.tools}</div> : null}
              <div className='mt-2'>Upload Date:2021 21 12</div>
              <div className='mt-2'>Upload Date:2021 21 12</div>
              <div className='mt-2'>Upload Date:2021 21 12</div>
              <div className='mt-2'>Upload Date:2021 21 12</div>
              <div className='mt-2'>Upload Date:2021 21 12</div>

            </div>

          </div>
        }
      </PopUp>}





    </div>
  )
}
export default Drawings;