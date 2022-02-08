import React, { useState } from 'react'
import { FilterSection } from '../components/FilterSection'
import svdrgn from "../images/svd2.jpg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export const Drawings = () => {
    const [size, findSize] = useState(false)
    const clicked = () => {
        const img = new Image();
        img.onload = function () {
            if (this.width > this.height) {
                findSize(!size)
            }

        }
        img.src = svdrgn;
    }
    return (
        <div className='mt-5 mb-5'>
            <FilterSection filterType='drawing'></FilterSection>


            <div class="img-wrapper">
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>
                <img className='each-img' src={svdrgn}></img>

            </div>





        </div>
    )
}
