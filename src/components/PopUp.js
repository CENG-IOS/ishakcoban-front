import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { PopupActions } from '../store/slices/Popup';

import { useNavigate  } from 'react-router-dom';
import { use  } from 'react-router';
import  ProVersion from './ProVersion';

export const PopUp = (props) => {
    const popupState = useSelector(state=> state.popup.popupState)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShow = () => {
        dispatch(PopupActions.changeState())
        if(popupState){
            navigate('/Drawings')
        }
    }

    return (
        <div>
            {popupState && <div onClick={handleShow} className='position-absolute popup-bg'> </div>}
            {popupState && <div className='position-fixed d-flex justify-content-end align-items-center mmmmmm'>
                <div onClick={handleShow} className='position-relative popup-cross d-flex justify-content-center align-items-center'>
                    <div className='position-absolute line1'></div>
                    <div className='position-absolute line2'></div>
                </div></div>}
            {popupState && <div className='popup position-fixed sss'>
            {props.children}
           
          
            
            </div>}
            
     
            

            
        </div>
    )
}
