import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { PopupActions } from '../store/slices/Popup';


const ProVersion = () => {
    const [show,setShow] =useState('')
    const [show1,setShow1] =useState(false)
    const popupState = useSelector(state => state.popup.popupState)
    const dispatch = useDispatch();
    const handleShow = ()=>{
        setShow(!show)

    }
    return (
        <div className='bottom-circles d-flex flex-column align-items-center'>
            
            <div className='d-flex justify-content-center bg-danger align-items-center'>
                <div className={show ? ' position-absolute proVersionContent animationProVersion' : 'position-absolute proVersionContent animationProVersion11'}></div>
                <div className={show ? 'position-absolute proVersionContent1 animationProVersion1' : 'position-absolute proVersionContent1 animationProVersion22'}></div>
                <div className={show ? 'position-absolute proVersionContent2 animationProVersion2' : 'position-absolute proVersionContent2 animationProVersion33'}></div>
                <div className='position-absolute contentProVersion d-flex justify-content-center align-items-center' >ORIGINAL IMAGE</div>

            </div>

        </div>
    )
}

export default ProVersion;