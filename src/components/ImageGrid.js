import React, { useEffect } from 'react'

export const ImageGrid = (props) => {
    return (
        <div id="img-canvas-wrapper" className='position-absolute'>
       
            <div id="img-canvas-shapes-wrapper" className='position-absolute'>
                <div className='position-absolute img-canvas-shapes-1 d-flex justify-content-end'>
                    <div className='triangle-1'></div>
                </div>

                <div className='position-absolute img-canvas-shapes-2 d-flex align-items-end'>
                    <div className='triangle-2'></div>
                </div>
            </div>
            <div id="img-canvas-blur-wrapper" className='position-absolute'></div>
            <div id="img-canvas-text-wrapper" className='position-absolute'><div className='img-canvas-text w-100 ms-2'>{props.name}</div></div>
            
        </div>
    )
}
