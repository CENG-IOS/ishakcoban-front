import React from 'react'
import { LeftAndRightLines } from '../components/homePagelines/LeftAndRightLines'
import { Logo } from '../components/homePagelines/Logo'
import { VerticalLine } from '../components/homePagelines/VerticalLine'

export const ForPractise = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-4 bg-success'><LeftAndRightLines></LeftAndRightLines></div>
            <div className='col-4 bg-primary'><Logo></Logo></div>
            <div className='col-4 bg-danger'><LeftAndRightLines></LeftAndRightLines></div>
            </div>
        </div>
    )
}
